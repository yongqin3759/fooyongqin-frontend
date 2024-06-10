import React from 'react'
import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'


const Modal = ({ title, children, isOpen, setIsOpen }) => { 

    return (
      <>
      <Transition appear show={isOpen}>
  <Dialog as="div" className="relative z-10 focus:outline-none" onClose={() => setIsOpen(false)}>
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0 transform-[scale(95%)]"
          enterTo="opacity-100 transform-[scale(100%)]"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 transform-[scale(100%)]"
          leaveTo="opacity-0 transform-[scale(95%)]"
        >
          <DialogPanel className="w-full max-w-[1200px] h-[85vh] rounded-xl bg-black p-6 backdrop-blur-2xl overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 ">
            <DialogTitle as="h3" className="text-3xl font-bold mb-4 text-blue-600">
              {title}
            </DialogTitle>
            {children}
            <div className="mt-4">
              <Button
                className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                onClick={() => setIsOpen(false)}
              >
                Got it, thanks!
              </Button>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </div>
  </Dialog>
</Transition>
    </>
    );


}

export default Modal