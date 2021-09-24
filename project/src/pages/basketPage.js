import { Basket } from "../components/Basket";
import { HeaderBlock } from "../components/Header_block";
import { Products } from "../components/Products";

export function BasketPage() {
  return (
    <div>
      <Basket />
      <HeaderBlock />
      <Products />
    </div>
  );
}
