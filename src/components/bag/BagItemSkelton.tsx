export function BagItemSkelton() {
    return   <li className='flex gap-x-4 h-32'>
    <div className='h-full w-28 flex-shrink-0 overflow-hidden rounded-md border border-base-200'>
      <div className='h-full w-full bg-base-200 animate-pulse' />
    </div>
    <div className='flex flex-col justify-between flex-grow'>
      <div className='flex flex-col gap-y-2'>
        <div className='h-4 w-1/2 bg-base-200 animate-pulse' />
        <div className='h-4 w-1/4 bg-base-200 animate-pulse' />
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex gap-x-2'>
          <div className='h-4 w-4 bg-base-200 animate-pulse' />
          <div className='h-4 w-4 bg-base-200 animate-pulse' />
          <div className='h-4 w-4 bg-base-200 animate-pulse' />
        </div>
        <div className='h-4 w-4 bg-base-200 animate-pulse' />
      </div>
    </div>
  </li>
}