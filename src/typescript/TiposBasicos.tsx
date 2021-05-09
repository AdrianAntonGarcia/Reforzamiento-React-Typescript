export const TiposBasicos = () => {
  let nombre: string | number = 'Adrián';
  const edad: number = 26;
  const estaActivo: boolean = true;

  const poderes: (string | number)[] = []; // 'Velocidad', 'Volar', 'Respirar en el agua'

  poderes.push('Volar');
  poderes.push(123);

  return (
    <>
      <h3>Tipos básicos</h3>
      {nombre}, {edad}, {estaActivo ? 'activo' : 'no activo'}
      <br />
      {poderes.join(', ')}
    </>
  );
};
