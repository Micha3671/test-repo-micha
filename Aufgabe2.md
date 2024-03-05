Angenommen wir haben eine Test-Datei mit 5 Tests.
Ihr müsst für folgende Szenarien jeweils bestimmen, wie viele Tests überhaupt durchgeführt werden.
Wenn zwei Tests ".todo"-Suffix beinhalten
Wenn ein Test ".only"-Suffix beinhaltet
Wenn drei Tests ".skip"-Suffix beinhalten
Wenn 2 Tests in einem Describe geschachtelt sind und dieses Describe den Suffix ".only" trägt.
Wenn 2 Tests den Suffix ".failing" beinhalten.

Antwort:
Wenn zwei Tests ".todo"-Suffix beinhalten:
Es werden 3 Tests durchgeführt (1 normaler Test + 2 Tests mit ".todo"-Suffix).

Wenn ein Test ".only"-Suffix beinhaltet:
Es wird nur der Test mit ".only"-Suffix durchgeführt.

Wenn drei Tests ".skip"-Suffix beinhalten:
Es werden 2 Tests durchgeführt (2 normalen Tests - 3 Tests mit ".skip"-Suffix).

Wenn 2 Tests in einem Describe geschachtelt sind und dieses Describe den Suffix ".only" trägt:
Es werden nur die 2 Tests in diesem Describe ausgeführt, da es den Suffix ".only" trägt.

Wenn 2 Tests den Suffix ".failing" beinhalten:
Es werden 2 Tests durchgeführt (2 Tests mit ".failing"-Suffix).
