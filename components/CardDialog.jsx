import { Dialog, DialogPanel, DialogBackdrop, DialogTitle } from '@headlessui/react'
import { IoMdClose } from "react-icons/io";


export default function CardDialogs({ title, open, handleClose, children }) {
  return (
    <Dialog open={open} as="div" className="relative z-[500] duration-200 ease-out data-[closed]:opacity-0" onClose={handleClose} transition>
      <div className="
        fixed inset-0 w-screen p-5
        flex items-center justify-center
        bg-[#000000] bg-opacity-50
      ">
        <div className="  ">
          <DialogPanel
            className="relative w-full max-w-6xl rounded bg-[#ffffff] overflow-y-auto max-h-screen"
          >
            <DialogTitle as="h3" className="text-xl text-primary px-6 py-4">
              {title}
            </DialogTitle>
            <button onClick={handleClose} className='
              absolute top-3 right-3
              hover:bg-[#e8e8e8] transition duration-200
              p-2 rounded-full
              '>
              <IoMdClose size={24} />
            </button>
            <hr className='border-[#e6e6e6]' />
            <div className='p-10'>
              {children}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}