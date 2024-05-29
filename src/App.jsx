import { useState } from 'react';
import './App.css'
import { Pdf } from './Pdf'
import { pdf } from '@react-pdf/renderer'

export const App = () => {

  const [data, setData] = useState({

    title: 'Título del PDF',
    content: 'Contenido del PDF'
    
  })

  const uploadPdf = async (blob) => {
    const formData = new FormData()
    formData.append('file', blob, 'Prueba3.pdf')

    try {

      const response = await fetch('http://localhost/src/backend/upload.php', {

        method: 'POST',
        body: formData,

      })
      const responseServer = await response.json()
      if (response.ok && responseServer['response'] === 'upload_ok') {

        console.log(responseServer)
        console.log('PDF uploaded successfully')

      } else {

        console.log(responseServer)
        console.error('Failed to upload PDF')
        alert('Error al enviar la informacion, intente de nuevo')

      }

    } catch (error) {

      console.error('Error:', error)
      alert('Error al enviar la informacion, intente de nuevo')

    }
  }

  const generateAndUploadPdf = async () => {

    const blob = await pdf(<Pdf data={data} />).toBlob()
    uploadPdf(blob)

  }

  return (
    <>
      <button onClick={generateAndUploadPdf}>Cargar PDF</button>
    </>
  )
}