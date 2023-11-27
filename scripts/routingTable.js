function route() {
    var inputElement = document.getElementById("ipInput");
    var resultElement = document.getElementById("routeResult");

    var destinationIP = inputElement.value;
    var routeTable = [
        { network: "172.16.0.1/24", nextHop: "Router A" },
        { network: "104.16.249.249/32", nextHop: "Router B" }
    ];

    var route = findRoute(destinationIP, routeTable);

    if (route) {
        resultElement.innerText = "Route to " + destinationIP + " through " + route.nextHop;
    } else {
        resultElement.innerText = "No route found for " + destinationIP;
    }
}

function findRoute(destinationIP, routeTable) {
    for (var i = 0; i < routeTable.length; i++) {
        var networkAddress = routeTable[i].network.split('/')[0];
        var subnetMask = routeTable[i].network.split('/')[1];

        if (isIPInNetwork(destinationIP, networkAddress, subnetMask)) {
            return routeTable[i];
        }
    }

    return null;
}

function isIPInNetwork(ip, network, subnetMask) {
    var ipParts = ip.split('.');
    var networkParts = network.split('.');

    for (var i = 0; i < subnetMask; i++) {
        if ((ipParts[i] & (255 << (8 - i))) !== (networkParts[i] & (255 << (8 - i)))) {
            return false;
        }
    }

    return true;
}
