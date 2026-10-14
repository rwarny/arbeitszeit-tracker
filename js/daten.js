const status = [
    {key: "buero", label: "Bürotag", regel: "arbeit", farbe: "#26d9e9"},
    {key: "homeoffice", label: "Homeoffice", regel: "arbeit", farbe: "#0d16cb"},
    {key: "urlaub", label: "Urlaub", regel: "frei", farbe: "#f1ca0b"},
    {key: "krank", label: "Krank", regel: "frei", farbe: "#f2950a"},
    {key: "schule", label: "Schule", regel: "frei", farbe: "#a60cf3"},
    {key: "abwesend", label: "Abwesend", regel: "abwesend", farbe: "#f10c0c"}
]

let tage = {};


function neuerTag() {
    return {
        status: "",
        kommen: "",
        gehen:"",
        pause: 0,
        entschuldigt: false,
        kommentar: ""
    };
}

function speichern() {
    localStorage.setItem("tage", JSON.stringify(tage));
}

function laden() {
    const gespeicherteTage = localStorage.getItem("tage");
    if (gespeicherteTage) {
        tage = JSON.parse(gespeicherteTage);
    }
}

export { status, tage, neuerTag, speichern, laden };