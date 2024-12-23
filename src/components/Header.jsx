import logo from '../assets/images/logo-mark.svg'

export const Header = () => {
  return (
    <header className='flex items-center justify-center gap-[12px] pt-[33px] md:pt-10 pb-10'>
      <img className='h-6 w-6 md:h-[30px] md:w-[30px]' src={logo} alt="logo" />
      <h1 className='font-bold font-fira text-[20px] md:text-[24px]'>Coding Conf</h1>
    </header>
  )
}
