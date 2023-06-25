interface Props {
  title: string;
  options: {
    label: string;
  }[];
}

export function SFilter(props: Props) {
  return (
    <details className='collapse collapse-plus'>
      <summary className='collapse-title text-sm font-medium text-neutral hover:text-neutral-focus'>
        {props.title}
      </summary>
      <ul role='list' className='collapse-content'>
        {props.options.map(option => (
          <li key={option.label}>
            <label className='label cursor-pointer justify-normal gap-x-3 text-neutral-content text-sm'>
              <input type='checkbox' className='checkbox' />
              <span className='label-text'>{option.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </details>
  );
}
