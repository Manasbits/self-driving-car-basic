const Config = {
    carCount: Number(localStorage.getItem("carCount")) || 20,
    mutationRate: Number(localStorage.getItem("mutationRate")) || 0.1,
    sensorCount: Number(localStorage.getItem("sensorCount")) || 3,
    sensorLength: Number(localStorage.getItem("sensorLength")) || 100,
    trainingMode: localStorage.getItem("trainingMode") || "GA" 
};
