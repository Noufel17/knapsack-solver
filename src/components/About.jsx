import Dialog from "@mui/material/Dialog";
import Link from "@mui/material/Link";
function About({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <div className='px-8 py-4'>
        <h3 className='text-primary-pink font-bold text-xl'>
          Description du problèm
        </h3>
        <p className='pl-6'>
          Le problem de sac à dos est un problème d'optimisation combinatoire
          qui est trés connu dans le domaine informatique ; il se donne par ceci
          : On se donne un ensemble d'objets , un poids et une valeur pour
          chaqu'un et un sac à dos avec une capacité maximal (poids maximal), et
          on détermine quel sont les objets qu'on va mettre dans le sac à dos et
          la valeur optimale qu'on peut obtenir.
        </p>
        <h3 className='text-primary-pink font-bold text-xl mt-4'>
          Description de notre application
        </h3>
        <p className='pl-6'>
          Knapsack solver est une solution web en ligne au problème du sac à dos
          on utilisant un algorithme du programmation dynamique qui a un temps
          d'exècution en O(n^2), et l'interface utilisateur est faite avec le
          framework React.
        </p>

        <h3 className='text-primary-pink font-bold text-xl mt-4'>
          A props des auteurs
        </h3>
        <div>
          <h5 className='pl-6 font-bold'>Noufel Naili</h5>
          <p className='pl-10'>
            {" "}
            - Étudiant 2CS option systèmes informatiques et logiciels à l'école
            nationale supèrieure d'informatique <br /> - Développeur WEB
            Fullstack
          </p>
          <Link
            className='pl-8'
            href='https://github.com/Noufel17/'
            underline='none'
          >
            Github : https://github.com/Noufel17/
          </Link>
        </div>
        <div className='mt-2'>
          <h5 className='pl-6 font-bold'>Redouan mohammed el ghali Chadouli</h5>
          <p className='pl-10'>
            {" "}
            - Étudiant 2CS option systèmes informatiques et logiciels à l'école
            nationale supèrieure d'informatique <br />- Développeur WEB
            Fullstack
          </p>
          <Link
            className='pl-8'
            href='https://github.com/Rechem/'
            underline='none'
          >
            Github : https://github.com/Rechem/
          </Link>
        </div>
      </div>
    </Dialog>
  );
}

export default About;
