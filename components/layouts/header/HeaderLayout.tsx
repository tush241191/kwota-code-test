export interface IHeaderLayout {}

const HeaderLayout: React.FC<IHeaderLayout> = () => {
  return (
    <header className='bg-white'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' aria-label='Top'>
        <div className='w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none'>
          <div className='flex items-center'>
            <a href='#'>
              <span className='text-2xl text-blue-500 font-extrabold'>
                KWOTA
              </span>
            </a>
          </div>
          <div className='ml-10 space-x-4'>
            <a href='#' className='text-base text-gray-800 hover:text-blue-500'>
              EST
            </a>
            <a href='#' className='text-base text-blue-500'>
              ENG
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderLayout;
