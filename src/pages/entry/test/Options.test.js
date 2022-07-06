import { render, screen } from '../../../test-utils/testing-lib-utils';
import Options from "../Options";
import userEvent from '@testing-library/user-event';

test("should display scoop images", async () => {
  render(<Options optionType="scoops" />);
  //find all the scoop images
  const scoopImgs = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImgs).toHaveLength(2);

  //confirm alt text of images
  const altText = scoopImgs.map((i) => i.alt);
  expect(altText).toEqual(["Mint chip scoop", "Vanilla scoop"]);
});

test("should display toppings images", async () => {
  render(<Options optionType="toppings" />);

  const toppingImgs = await screen.findAllByRole("img", { name: /topping$/i });
  expect(toppingImgs).toHaveLength(2);

  const altText = toppingImgs.map((i) => i.alt);
  expect(altText).toEqual(["M&Ms topping", "Hot fudge topping"]);
});

test('Sccops subtotal should update as adding the scoop options', async()=>{
  render(<Options optionType="scoops"/>);

  //scoops subtotal should be $0.00 on initial load
  const scoopSubtotalText = screen.getByText('scoops total : $', {exact : false})
  expect(scoopSubtotalText).toHaveTextContent('0.00')

  //add vanilla scoop so that scoop sub total should be updated to $2.00
  const scoopInput = await screen.findByRole('spinbutton', {name:'Vanilla'})
  userEvent.clear(scoopInput)
  userEvent.type(scoopInput, '1')
  expect(scoopSubtotalText).toHaveTextContent('2.00')
})

test('Toppings subtotal should update as selecting the toppings', async()=>{
  render(<Options optionType="toppings"/>)

   //toppings subtotal should be $0.00 on initial load
  const toppingsSubtotalText = screen.getByText('toppings total : $', {exact : false})
  expect(toppingsSubtotalText).toHaveTextContent(0.00)

    // on selecting Hot fudge, toppingssubtotal should become $1.50
  const toppingsCheckbox = await screen.findByRole('checkbox', {name:'Hot fudge'})
  userEvent.clear(toppingsCheckbox);
  userEvent.click(toppingsCheckbox);
  expect(toppingsSubtotalText).toHaveTextContent(1.50)

  //on deselecting Hot fudge, toppingssubtotal should become $0.00 again
  userEvent.click(toppingsCheckbox);
  expect(toppingsSubtotalText).toHaveTextContent(0.00)
})