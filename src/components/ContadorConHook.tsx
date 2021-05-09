import { useCounter } from '../hooks/useCounter';

export const ContadorConHook = () => {
  const { valor, acumular } = useCounter(0);
  return (
    <>
      <h3>
        Contador con Hook: <small>{valor}</small>
      </h3>
      <button className="btm btn-primary" onClick={() => acumular(1)}>
        +1
      </button>
      &nbsp;
      <button className="btm btn-primary" onClick={() => acumular(-1)}>
        -1
      </button>
    </>
  );
};
