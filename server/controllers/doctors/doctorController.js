import doctorData from "../../mock/doctorData";

const doctorController = {
  searchDoctor: (req, res, next) => {
    const { lat, lng, type } = req.query;

    if (!lat || !lng) {
      return res.status(400).json({
        error: "Latitude and longitude are required in the query parameters.",
      });
    }

    const latitude = parseFloat(lat);
    const longitude = parseFloat(lng);
    const doctorMockData = doctorData();

    const filteredDoctors = doctorMockData.filter((doctor) => {
      const doctorLat = parseFloat(doctor.latitude);
      const doctorLng = parseFloat(doctor.longitude);

      // You can adjust the range as needed
      const range = 1.5; // Example: Doctors within 1.5 degrees of latitude and longitude

      const isWithinRange =
        Math.abs(doctorLat - latitude) <= range &&
        Math.abs(doctorLng - longitude) <= range;

      // Filter by doctor type if type parameter is provided
      const isMatchingType =
        !type || doctor.category.key.toLowerCase() === type.toLowerCase();

      return isWithinRange && isMatchingType;
    });

    const totalCount = filteredDoctors.length; // Calculate the total count

    res.json({
      totalCount, // Include the total count in the response
      doctors: filteredDoctors, // Include the filtered doctors
    });
  },
};

export default doctorController;