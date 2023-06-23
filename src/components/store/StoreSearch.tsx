"use client";
import React from "react";
import { MdManageSearch } from "react-icons/md";

export function StoreSearch() {
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type='button'
        className='btn btn-ghost btn-circle'
        onClick={() => dialogRef.current?.showModal()}
      >
        <MdManageSearch className="text-3xl" />
      </button>
      <dialog
        ref={dialogRef}
        id='search_modal'
        className='modal modal-bottom sm:modal-middle'
      >
        <div className='modal-box'>
          <form method='dialog' className='form-control w-full relative'>
            <button
              type='submit'
              className='absolute right-2 inset-y-0'
            >
              <kbd className='kbd kbd-sm hover:badge-ghost'>Esc</kbd>
            </button>
            <input
              type='text'
              name='search'
              placeholder='Search shop...'
              className='input input-ghost w-full'
            />
          </form>

          <div className='divider'></div>

          <div ></div>
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button type='submit'>close</button>
        </form>
      </dialog>
    </>
  );
}
