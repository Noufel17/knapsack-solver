export default function KnapsackTable({ P, maxCapacity, nbObjects }) {
  return (
    <>
      <div className='table-resultat'>
        <table>
          <thead>
            <th colspan={maxCapacity.toString()}>Déroulement de la solution</th>
          </thead>
          <tbody>
            {P.map((row, rindex) =>
              rindex !== 0 ? (
                <tr key={rindex}>
                  {row.map((data, cindex) =>
                    cindex !== 0 ? (
                      <td key={rindex * 100 + cindex}>{data}</td>
                    ) : null
                  )}
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
      <h2 className='text-primary-pink font-bold sm:text-3xl text-2xl'>
        Le profit maximum est :
        {P[Number(P.length) - 1][Number(P[1].length) - 1]}
      </h2>
    </>
  );
}
