"use client";

import { useRouter } from "next/navigation";

import { CollectionsList } from "../shared/CollectionsList";
import { FeaturedCollections } from "../shared/FeaturedCollections";

interface Props { 
  collectionsList: React.ComponentProps<typeof CollectionsList>;
}

export function AppCollections(props: Props) {
  const router = useRouter();

  return (
    <dialog open id='collections_modal' className='modal modal-top'>
      <div className='modal-box max-h-none'>
        <div className='relative bg-white'>
          <div className='mx-auto max-w-7xl px-4'>
            <div className='grid grid-cols-2 gap-x-8 gap-y-10 py-8'>
              <div className='row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm'>
              <CollectionsList collections={props.collectionsList.collections} />
              </div>
              <FeaturedCollections />
            </div>
          </div>
        </div>
      </div>
      <div className='modal-backdrop bg-black opacity-50'>
        <button type='button' onClick={router.back}>
          close
        </button>
      </div>
    </dialog>
  );
}
