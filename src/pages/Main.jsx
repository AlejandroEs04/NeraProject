import logoimg from '../../public/img/logo.png';

const Main = () => {
    return (
      <div className="flex flex-col justify-center items-center">
        <img src={logoimg} alt='logo NERA Group' className='max-w-sm mt-32' />

        <h1 className='text-3xl font-bold text-white mt-5'>Coming soon...</h1>
      </div>
    )
}

export default Main
