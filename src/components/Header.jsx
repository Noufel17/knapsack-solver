import { Button } from "@mui/material";
import About from "./About";
function Header({ showAbout, setShowAbout }) {
  return (
    <div
      className='w-full h-12 bg-primary-pink mx-auto md:rounded-b-[6px] 
            flex flex-row justify-between items-center p-4'
    >
      <h6 className='text-white'>KNAPSAC SOLVER</h6>
      <Button
        variant='text'
        className='!text-white'
        onClick={() => {
          setShowAbout(true);
        }}
      >
        à props de nous
      </Button>
      <About
        open={showAbout}
        onClose={() => {
          setShowAbout(false);
        }}
      />
    </div>
  );
}

export default Header;
