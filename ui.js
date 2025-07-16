(function(){
    const $ = (id) => document.getElementById(id);

    const carRange = $("carCount");
    const mutationRange = $("mutationRate");
    const sensorRange = $("sensorCount");
    const sensorLenRange = $("sensorLength");

    const carLabel = $("carCountLabel");
    const mutationLabel = $("mutationLabel");
    const sensorLabel = $("sensorCountLabel");
    const sensorLenLabel = $("sensorLengthLabel");

    carRange.value = Config.carCount;
    mutationRange.value = Config.mutationRate;
    sensorRange.value = Config.sensorCount;
    sensorLenRange.value = Config.sensorLength;

    function refreshLabels() {
        carLabel.textContent = carRange.value;
        mutationLabel.textContent = Number(mutationRange.value).toFixed(2);
        sensorLabel.textContent = sensorRange.value;
        sensorLenLabel.textContent = sensorLenRange.value;
    }
    refreshLabels();

    [carRange, mutationRange, sensorRange, sensorLenRange].forEach((el)=>{
        el.addEventListener("input", refreshLabels);
    });

    $("applyBtn").addEventListener("click", ()=>{
        localStorage.setItem("carCount", carRange.value);
        localStorage.setItem("mutationRate", mutationRange.value);
        localStorage.setItem("sensorCount", sensorRange.value);
        localStorage.setItem("sensorLength", sensorLenRange.value);
        location.reload();
    });

    window.UI = {
        updateMetrics(distance, fps){
            $("distance").textContent = distance.toFixed(0);
            $("fps").textContent = fps.toFixed(1);
        }
    };
})();
