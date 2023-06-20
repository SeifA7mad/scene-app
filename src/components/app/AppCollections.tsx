"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { CollectionsList } from "../collections/CollectionsList";
import { FeaturedCollections } from "../collections/CollectionsFeatured";

interface Props {
  collectionsList: React.ComponentProps<typeof CollectionsList>;
}

export function AppCollections(props: Props) {
  const router = useRouter();

  return (
    <dialog open id='collections_modal' className='modal modal-top'>
      <motion.div
        initial={{ translateY: "-100%" }}
        animate={{ translateY: 0 }}
        transition={{ type: "just", duration: 0.1 }}
        className='modal-box max-h-none'
      >
        <div className='relative bg-white'>
          <div className='mx-auto max-w-7xl px-4'>
            <div className='grid grid-cols-2 gap-x-8 gap-y-10 py-8'>
              <div className='row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm'>
                <CollectionsList
                  collections={props.collectionsList.collections}
                />
              </div>
              <FeaturedCollections />
            </div>
          </div>
        </div>
      </motion.div>
      <div className='modal-backdrop bg-black opacity-50'>
        <button type='button' onClick={router.back}>
          close
        </button>
      </div>
    </dialog>
  );
}
