export interface IProject {
  title: string;
  description: string;
  material: {
    name: string;
    color: string;
  };
  standard: string;
  price: number;
  credit_balance: number;
  image: string;
}

const Project: React.FC<IProject> = (props: IProject) => {
  const {
    title,
    description,
    material,
    standard,
    price,
    credit_balance,
    image,
  } = props;

  return (
    <div className='space-y-4 mb-4'>
      <div className='project-data relative flex flex-col rounded-[20px] shadow-md overflow-hidden'>
        <div className='relative flex-shrink-0 aspect-w-3 aspect-h-1 h-[195px]'>
          <img className='object-cover object-bottom' src={image} alt='' />
          <div className='absolute inset-x-0 bottom-0 h-full'>
            <div className='relative h-full'>
              <div className='flex flex-col p-4 space-y-2'>
                {standard != '' && (
                  <button
                    type='button'
                    className='w-fit inline-flex items-center h-9 px-6 py-2 shadow-sm text-xs font-bold rounded text-black bg-[#CBD5E0]/75 focus:outline-none focus:ring-0'
                  >
                    {standard}
                  </button>
                )}
                <button
                  type='button'
                  style={{ backgroundColor: material.color }}
                  className={`w-fit inline-flex items-center h-9 px-6 py-2 shadow-sm text-xs font-bold rounded text-black focus:outline-none focus:ring-0`}
                >
                  {material.name}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1 bg-white p-4 flex justify-between'>
          <div className='flex items-center'>
            <div className='ml-3 space-y-1'>
              <p className='text-lg font-normal text-gray-900'>
                <span className='hover:underline'>{price}€/tonne</span>
              </p>
              <div className='flex space-x-1 text-xs font-normal text-gray-500'>
                <span>{credit_balance} carbon credits in stock</span>
              </div>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <button
                type='button'
                className='inline-flex items-center p-1.5 border border-transparent rounded-[10px] shadow-sm text-white bg-[#07A5E2] focus:outline-none focus:ring-0'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-7 w-7'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 4v16m8-8H4'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className='project-description absolute inset-x-0 bottom-0 h-full bg-[#353535]/80'>
          <div className='h-full flex items-center justify-center'>
            <div className='px-12 flex flex-col space-y-4 text-center'>
              <p className='text-white font-bold text-sm line-clamp-4'>
                {description}
              </p>
              <button
                type='button'
                className='w-fit mx-auto h-12 inline-flex items-center px-8 py-2 border border-[#07A5E2] shadow-sm text-xs font-bold rounded-lg text-[#07A5E2] bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Read about the project
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='text-lg leading-6 font-bold space-y-1'>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Project;
