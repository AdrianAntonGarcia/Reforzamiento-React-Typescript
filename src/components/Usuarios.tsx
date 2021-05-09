import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';
export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  useEffect(() => {
    // Llamado API
    cargarUsuarios();
  }, []);

  const pageRef = useRef(1);

  const cargarUsuarios = async () => {
    const {
      data: { data },
    } = await reqResApi.get<ReqResListado>('/users', {
      params: { page: pageRef.current },
    });
    if (data.length > 0) {
      setUsuarios(data);
      pageRef.current++;
    } else {
      alert('No hay más registros');
    }
  };

  const renderItem = ({
    id,
    first_name,
    last_name,
    email,
    avatar,
  }: Usuario) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{ width: 35, borderRadius: 100 }}
          />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };
  return (
    <>
      <h3>Usuarios:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map((usuario) => renderItem(usuario))}</tbody>
      </table>
      <button className="btn btn-primary" onClick={cargarUsuarios}>
        Siguientes
      </button>
    </>
  );
};
