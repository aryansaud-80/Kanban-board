interface HeaderProps {
  text: string;
  bg: string;
  count: number;
}

const Header: React.FC<HeaderProps> = ({ text, bg, count }) => {
  return (
    <div
      className={`${bg} h-16 flex items-center pl-4 rounded-md uppercase text-md font-semibold sticky top-0 z-10`}
    >
      {text}
      <div className='flex items-center justify-center w-5 h-5 ml-3 bg-white rounded-full'>
        {count}
      </div>
    </div>
  );
};

export default Header;
