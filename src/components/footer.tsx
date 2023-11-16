import { Logo3Sc } from "./custom/icons";

export const Footer = () => (
  <footer className="bg-black text-white mt-[154px]">
    <div>
      <div className="logo py-6 flex justify-center">
        <Logo3Sc />
      </div>
      <div className="horizontal w-[310px] h-[2px] bg-[#C3C3C3] mx-auto" />
      <div className="ml-[28px] mt-6 mb-[27px]">
        <ul className="pl-[10px] flex flex-col gap-y-3 text-white list-none">
          <li className="text-xs/[18px]">
            <p className="font-poppins font-bold uppercase">Bournemouth</p>
            <div className="font-anon font-normal">
              <p>
                Telephone House <br /> Bournemouth, BH1 3NE
              </p>
            </div>
          </li>
          <li className="text-xs/[18px]">
            <p className="font-poppins font-bold uppercase">London</p>
            <div className="font-anon font-normal">
              <p>
                51 Eastcheap <br /> London, EC3M 1JP
              </p>
            </div>
          </li>
          <li className="text-xs/[18px]">
            <p className="font-poppins font-bold uppercase">Washington</p>
            <div className="font-anon font-normal">
              <p>
                80 M Street SE <br /> Washington, D.C 20003
              </p>
            </div>
          </li>
          <li className="text-xs/[18px]">
            <p className="font-poppins font-bold uppercase">Florida</p>
            <div className="font-anon font-normal">
              <p>
                7901 4th St N, STE 300 <br /> St. Petersburg FL 33702p
              </p>
            </div>
          </li>
        </ul>
        <div>
          <ul></ul>
        </div>
      </div>
    </div>
    <div className="mb-6 pt-1 pb-[18px]">
      <div className="text-center font-anon font-normal text-xs/[18px]">
        <p className="pb-px">© 2023 3 Sided Cube</p>
        <p>Let's Build Tech For Good</p>
      </div>
    </div>
  </footer>
);
