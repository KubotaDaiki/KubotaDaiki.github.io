import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { GiHamburgerMenu } from "react-icons/gi";

export function MobileDrawer({ navItems }) {
  return (
    <Menu>
      <MenuButton className="h-14 block sm:hidden p-2">
        <GiHamburgerMenu size={20} color={'#eeeeee'} />
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="
          w-full p-1
        bg-primary text-white
          text-base
          z-[50]
          transition duration-200 ease-out data-[closed]:-translate-y-full
        "
      >
        {navItems?.map((item) => {
          return (
            <MenuItem key={item}>
              {/* 以下のaタグをコンポーネントとして抽出するとaタグのrefをheadless uiが参照できない？のでエラーが発生する。
                  解決法はあるが、面倒なのでこのままにしておく */}
              <a className="
                  w-full py-3 px-3
                  flex justify-center items-center
                  data-[focus]:bg-accent
                "
                href={"#" + item}
              >
                {item}
              </a>
            </MenuItem>
          );
        })}
      </MenuItems>
    </Menu>
  )
}