import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const NuevoPlatillo = () => {

  const formik = useFormik({
    initialValues : {
      nombre      : '',
      precio      : '',
      categoria   : '',
      imagen      : '',
      descripcion : ''
    },
    validationSchema : Yup.object({
      
      nombre      : Yup.string()
                      .min(3, 'Los platillos deben tener al menos 3 caracteres')
                      .required('El nombre del platillo es obligatorio'),
      precio      : Yup.number()
                      .min(3, 'Debes agregar un numero')
                      .required('El precio del platillo es obligatorio'),
      categoria   : Yup.string()
                      .required('La categoria del platillo es obligatoria'),
      descripcion : Yup.string()
                      .min(10, 'Descripcion debe ser minimo de 10 caracteres')
                      .required('La descripcion es obligatoria'),
    }),
    onSubmit :  datos => {
      console.log('enviando datos', datos);
    }
  })


  return (
    <div>
      <h1 className='text-3xl font-light mb-4'>Agregar Platillo</h1>
        <div className='flex justify-center mt-10'>
          <div className='w-full max-w-3xl '>
            <form
              onSubmit={formik.handleSubmit}
            >
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='nombre'>Nombre</label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='nombre'
                  placeholder='Nombre platillo'
                  value={formik.values.nombre}
                  onChange={formik.handleChange}
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='precio'>Precio</label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  min='0'
                  type='number'
                  id='precio'
                  placeholder='Precios del platillo'
                  value={formik.values.precio}
                  onChange={formik.handleChange}
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='categoria'>Categoria</label>
                <select
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  name="categoria"
                  id="categoria"
                  value={formik.values.categoria}
                  onChange={formik.handleChange}
                >
                  <option value="">--Seleccione--</option>
                  <option value="desayuno">--Desayuno--</option>
                  <option value="comida">--Comida--</option>
                  <option value="cena">--Cena--</option>
                  <option value="bebida">--Bebidas--</option>
                  <option value="poste">--Postres--</option>
                  <option value="ensalada">--Ensaladas--</option>
                </select>
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='imagen'>Imagen</label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='file'
                  id='imagen'
                  value={formik.values.imagen}
                  onChange={formik.handleChange}
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='descripcion'>Descripcion</label>
                <textarea
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40'
                  id='descripcion'
                  placeholder='Descripcion del platillo'
                  value={formik.values.descripcion}
                  onChange={formik.handleChange}
                ></textarea>
              </div>
              <input 
                className='bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold'
                type="submit"
                value='Agregar platillo'
              />
            </form>
          </div>
        </div>
    </div>
  );
}

export default NuevoPlatillo;
