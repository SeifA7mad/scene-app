import { ScSearch } from "src/assets/ScIcons";

interface Props {
  drawerId: string;
}

export function AppSideNav(props: Props) {
  return (
    <div className='drawer w-auto'>
      <input id={props.drawerId} type='checkbox' className='drawer-toggle' />
      <div className='drawer-content '>
        {/* Page content here */}
        <label
          htmlFor={props.drawerId}
          className='hidden lg:inline-flex btn btn-ghost btn-circle'
        >
          <ScSearch />
        </label>
      </div>
      <div className='drawer-side z-10'>
        <label htmlFor={props.drawerId} className='drawer-overlay'></label>
        <div className='menu p-4 w-full lg:w-80 h-full bg-base-200 text-base-content'>
          {/* Sidebar content here */}
          <label htmlFor={props.drawerId} className='btn btn-ghost'>
            Close
          </label>
          <ul>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
