const addDoctor = async (req, res) => {
    try {
    //   console.log(req.body); // Logs the form-data fields
    //   console.log(req.file); // Logs the uploaded file
      const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
      const imageFile = req.file;
      console.log({ name, email, password, speciality, degree, experience, about, fees, address }, imageFile);
      
      res.status(200).send({ message: 'Doctor added successfully' });
    } catch (error) {
    //   console.error('Error in addDoctor:', error);
    //   res.status(500).send({ error: 'Something went wrong' });

    }
  };
  
export {addDoctor}