import { Usuario, ReqResListado } from '../interfaces/reqRes';
import { useState, useEffect, useRef } from 'react';
import { reqResApi } from '../api/reqRes';

export const useUsuarios = () => {
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
    } else {
      pageRef.current--;
      alert('No hay más registros');
    }
  };

  const paginaSiguiente = () => {
    pageRef.current++;
    cargarUsuarios();
  };

  const paginaAnterior = () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      cargarUsuarios();
    }
  };

  return { usuarios, paginaSiguiente, paginaAnterior };
};
