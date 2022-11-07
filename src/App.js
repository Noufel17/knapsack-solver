import MaterialTable from "material-table";
import KnapSackTable from "./components/KnapSackTable.jsx";
import knapsack from "./algorithm/index";
import Header from "./components/Header.jsx";
import { Fragment, useState, useRef } from "react";
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Calculate, Replay } from "@mui/icons-material";
import { tableIcons, tableLoc, tableOptions } from "./helpers/tableOptions";
function App() {
  const inputRef = useRef();
  const [showAbout, setShowAbout] = useState(false);
  const [solving, setSolving] = useState(false);
  const [capacity, setCapacity] = useState("");
  const [error, setError] = useState(false);
  const [tokenObjects, setTokenObjects] = useState([]);
  const [P, setP] = useState([]);
  const [objets, setObjets] = useState([
    {
      name: "obj1",
      weight: 2,
      value: 5,
    },
    {
      name: "obj2",
      weight: 1,
      value: 3,
    },
    {
      name: "obj3",
      weight: 4,
      value: 7,
    },
    {
      name: "obj4",
      weight: 3,
      value: 1,
    },
    {
      name: "obj5",
      weight: 5,
      value: 6,
    },
  ]);
  const columns = [
    {
      field: "name",
      title: "Objet",
      render: (rowData) => (
        <div className='text-center text-sm sm:text-xl font-bold'>
          {rowData.name}
        </div>
      ),
    },
    {
      field: "weight",
      title: "Poids (Wi)",
      render: (rowData) => (
        <div className='text-center text-sm sm:text-xl font-bold'>
          {rowData.weight}
        </div>
      ),
    },
    {
      field: "value",
      title: "Valeur (Vi)",
      render: (rowData) => (
        <div className='text-center text-sm sm:text-xl font-bold'>
          {rowData.value}
        </div>
      ),
    },
  ];
  const CapacityTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#FF2E94",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#FF2E94",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#FF2E94",
      },
      "&:hover fieldset": {
        borderColor: "#FF2E94",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FF2E94",
      },
    },
  });
  return (
    <Fragment>
      <Header showAbout={showAbout} setShowAbout={setShowAbout} />
      <div className=' flex flex-col items-center text-center gap-12 mt-8 '>
        <CapacityTextField
          disabled={solving}
          inputRef={inputRef}
          error={error}
          onFocus={() => setError(false)}
          helperText={"Le poids maximum doit etre strictement positif !"}
          className={"text-field w-5/6 sm:w-2/3 h-14 !text-primary-pink"}
          type='number'
          label='Spécifiez le poids maximum de votre sac à dos ( W ) :'
          variant='outlined'
        />
        <div className='table-objets w-5/6'>
          <MaterialTable
            className=' !text-primary-pink'
            title={
              <div>
                <h1 className='text-primary-pink font-bold sm:text-xl text-xs'>
                  Introduire les objets disponibles ici :
                </h1>
              </div>
            }
            columns={columns}
            data={objets}
            icons={tableIcons}
            localization={tableLoc}
            options={tableOptions}
            editable={
              !solving
                ? {
                    onRowAdd: (newRow) =>
                      new Promise((resolve, reject) => {
                        if (newRow.weight && newRow.value && newRow.name) {
                          setObjets([...objets, newRow]);
                          setTimeout(() => resolve(), 500);
                        } else {
                          reject();
                        }
                      }),
                    onRowUpdate: (newRow, oldRow) =>
                      new Promise((resolve, reject) => {
                        const updatedData = [...objets];
                        updatedData[oldRow.tableData.id] = newRow;
                        setObjets(updatedData);
                        setTimeout(() => resolve(), 500);
                      }),
                    onRowDelete: (selectedRow) =>
                      new Promise((resolve, reject) => {
                        const updatedData = [...objets];
                        updatedData.splice(selectedRow.tableData.id, 1);
                        setObjets(updatedData);
                        setTimeout(() => resolve(), 500);
                      }),
                  }
                : false
            }
          />
        </div>
        <Button
          disabled={error || !objets.length || solving}
          variant='outlined'
          startIcon={<Calculate />}
          className='!text-primary-pink !my-4'
          sx={{
            borderColor: "#FF2E94",
            color: "#FF2E94",
            "&:hover": {
              borderColor: "#FF2E94",
            },
            "&:active": {
              boxShadow: "none",
              borderColor: "#FF2E94",
            },
            "&:focus": {
              borderColor: "#FF2E94",
            },
          }}
          onClick={() => {
            const value = inputRef.current.value;
            if (value <= 0) {
              setError(true);
            } else {
              setError(false);
              setCapacity(value);
              const { table, tokenObjects } = knapsack(
                [{}, ...objets],
                Number(value) + 1
              );
              setP(table);
              setTokenObjects(tokenObjects);
              setSolving(true);
              setTimeout(
                () =>
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  }),
                100
              );
            }
          }}
        >
          Calculer le résultat
        </Button>

        {solving && (
          <Button
            startIcon={<Replay />}
            variant='outlined'
            className='!text-primary-pink !mt-4'
            sx={{
              borderColor: "#FF2E94",
              color: "#FF2E94",
              "&:hover": {
                borderColor: "#FF2E94",
              },
              "&:active": {
                boxShadow: "none",
                borderColor: "#FF2E94",
              },
              "&:focus": {
                borderColor: "#FF2E94",
              },
            }}
            onClick={() => {
              setSolving(false);
            }}
          >
            Réessayer
          </Button>
        )}
        {solving && (
          <KnapSackTable
            P={P}
            nbObjects={objets.length}
            maxCapacity={parseInt(capacity)}
          />
        )}
        {solving && (
          <div className=' mb-60 text-2xl text-primary-pink font-bold sm:text-3xl'>
            Les objets selectionnées :
            {tokenObjects.map((object, index) => (
              <span key={index}> {object.name} </span>
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default App;
