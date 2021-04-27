//Efficiently combine two sorted arrays into an array containing the sorted multiset intersection of the two. 
//Example: given [1,2,2,2,7] and [2,2,6,6,7], return [2,2,7].


const {performance} = require("perf_hooks");

function intersectSortedArray(arr1, arr2){
    var output = [],
        i = 0,
        j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] === arr2[j]){
            output.push(arr1[i])
            i++;
            j++;
        }
        else if(arr1[i] > arr2[j]) j++;
        else i++;
    }
    return output;
}

const array1 = [4, 4, 5, 8, 9, 10, 11, 12, 15, 18, 21, 25, 27, 28, 31, 33, 37, 38, 39, 40, 42, 46, 50, 51, 52, 55, 56, 58, 59, 60, 61, 63, 68, 71, 73, 75, 76, 77, 78, 80, 82, 84, 87, 89, 90, 91, 94, 95, 98, 101, 102, 103, 108, 109, 113, 114, 115, 121, 122, 123, 125, 134, 135, 138, 141, 143, 144, 145, 147, 148, 149, 150, 151, 153, 155, 156, 158, 160, 164, 165, 167, 169, 171, 173, 176, 179, 180, 183, 185, 186, 190, 194, 198, 200, 202, 207, 211, 215, 217, 218, 219, 224, 229, 231, 234, 235, 236, 240, 243, 245, 247, 248, 249, 250, 251, 252, 253, 254, 257, 260, 261, 264, 267, 268, 269, 273, 275, 276, 278, 282, 284, 287, 288, 290, 291, 296, 297, 300, 301, 304, 307, 308, 309, 311, 313, 319, 320, 323, 324, 326, 329, 332, 334, 336, 341, 344, 345, 346, 347, 349, 350, 351, 352, 355, 358, 359, 361, 362, 363, 364, 366, 367, 369, 371, 374, 376, 377, 378, 381, 383, 384, 385, 388, 389, 392, 393, 394, 400, 401, 405, 408, 410, 413, 414, 415, 417, 418, 419, 421, 424, 425, 427, 430, 431, 433, 434, 437, 438, 440, 441, 442, 444, 446, 447, 448, 451, 452, 453, 454, 457, 458, 462, 464, 465, 468, 470, 472, 473, 474, 475, 479, 481, 484, 492, 495, 498, 500, 508, 509, 513, 516, 518, 519, 522, 523, 524, 525, 529, 531, 532, 533, 534, 536, 537, 538, 542, 544, 545, 546, 548, 551, 552, 553, 554, 555, 558, 561, 565, 570, 572, 573, 574, 576, 578, 581, 582, 583, 584, 585, 586, 587, 589, 590, 591, 593, 594, 595, 596, 597, 598, 601, 602, 603, 604, 605, 607, 608, 609, 610, 613, 614, 618, 620, 621, 623, 624, 626, 627, 628, 633, 635, 636, 640, 641, 642, 645, 648, 650, 651, 652, 653, 654, 656, 658, 660, 664, 670, 672, 674, 676, 677, 678, 679, 680, 684, 687, 688, 689, 690, 692, 695, 700, 701, 702, 703, 704, 705, 706, 707, 708, 711, 712, 716, 717, 720, 721, 723, 726, 729, 730, 731, 733, 737, 738, 739, 741, 742, 743, 747, 749, 752, 754, 755, 759, 761, 762, 763, 764, 765, 766, 768, 769, 772, 773, 774, 776, 778, 781, 782, 783, 784, 785, 786, 787, 790, 793, 796, 797, 798, 801, 803, 805, 807, 808, 809, 810, 811, 813, 814, 817, 818, 819, 820, 822, 825, 826, 827, 828, 829, 830, 833, 834, 836, 837, 839, 841, 842, 843, 855, 856, 859, 860, 862, 864, 866, 867, 868, 869, 870, 871, 872, 873, 874, 877, 878, 879, 883, 884, 885, 886, 893, 894, 895, 900, 905, 906, 908, 910, 911, 914, 915, 917, 919, 921, 923, 925, 927, 928, 933, 934, 938, 939, 940, 946, 947, 949, 950, 951, 952, 954, 956, 957, 960, 965, 967, 968, 970, 972, 973, 974, 976, 978, 979, 983, 984, 986, 988, 989, 994, 995, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1010, 1011, 1012, 1013, 1015, 1016, 1021, 1022, 1023, 1025, 1026, 1027, 1029, 1032, 1033, 1039, 1041, 1042, 1044, 1048, 1051, 1052, 1053, 1054, 1055, 1056, 1060, 1065, 1066, 1067, 1069, 1071, 1072, 1073, 1077, 1079, 1081, 1083, 1085, 1086, 1089, 1090, 1091, 1097, 1100, 1101, 1103, 1104, 1107, 1108, 1109, 1111, 1113, 1114, 1115, 1120, 1121, 1124, 1125, 1127, 1129, 1131, 1132, 1135, 1141, 1143, 1144, 1148, 1149, 1150, 1153, 1154, 1156, 1158, 1160, 1166, 1167, 1168, 1170, 1171, 1173, 1174, 1178, 1180, 1182, 1183, 1187, 1188, 1196, 1197, 1198, 1199, 1204, 1206, 1207, 1208, 1211, 1212, 1214, 1215, 1218, 1219, 1220, 1221, 1223, 1226, 1227, 1228, 1229, 1231, 1233, 1234, 1235, 1238, 1242, 1244, 1245, 1249, 1250, 1254, 1255, 1260, 1261, 1262, 1263, 1265, 1267, 1269, 1270, 1271, 1276, 1280, 1281, 1287, 1288, 1289, 1293, 1294, 1295, 1299, 1301, 1303, 1309, 1311, 1312, 1314, 1316, 1317, 1319, 1320, 1321, 1322, 1323, 1326, 1330, 1331, 1334, 1341, 1342, 1344, 1345, 1346, 1347, 1348, 1349, 1351, 1352, 1354, 1356, 1365, 1366, 1368, 1371, 1372, 1373, 1375, 1376, 1378, 1379, 1381, 1383, 1384, 1385, 1389, 1390, 1392, 1393, 1395, 1396, 1398, 1399, 1401, 1402, 1403, 1411, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1422, 1424, 1425, 1427, 1428, 1429, 1430, 1431, 1436, 1440, 1441, 1442, 1443, 1446, 1449, 1450, 1451, 1454, 1456, 1458, 1463, 1464, 1465, 1466, 1467, 1468, 1472, 1473, 1474, 1478, 1480, 1482, 1485, 1486, 1487, 1488, 1492, 1493, 1496, 1499, 1504, 1506, 1510, 1511, 1512, 1513, 1515, 1518, 1520, 1521, 1523, 1526, 1529, 1532, 1533, 1536, 1539, 1543, 1544, 1545, 1547, 1548, 1549, 1550, 1552, 1556, 1561, 1562, 1563, 1567, 1568, 1569, 1570, 1571, 1573, 1575, 1577, 1578, 1579, 1580, 1581, 1584, 1587, 1590, 1592, 1594, 1595, 1597, 1599, 1601, 1604, 1605, 1607, 1608, 1612, 1613, 1614, 1619, 1620, 1621, 1622, 1623, 1624, 1625, 1626, 1629, 1630, 1635, 1637, 1640, 1641, 1643, 1645, 1647, 1648, 1649, 1654, 1657, 1658, 1661, 1663, 1664, 1665, 1668, 1670, 1671, 1674, 1675, 1676, 1677, 1679, 1680, 1681, 1682, 1683, 1684, 1687, 1688, 1689, 1691, 1692, 1694, 1695, 1696, 1699, 1708, 1709, 1712, 1713, 1716, 1718, 1719, 1721, 1723, 1724, 1725, 1726, 1729, 1731, 1734, 1735, 1736, 1737, 1739, 1740, 1741, 1742, 1745, 1746, 1747, 1750, 1751, 1753, 1755, 1759, 1760, 1765, 1766, 1770, 1773, 1776, 1777, 1781, 1782, 1784, 1786, 1788, 1789, 1795, 1796, 1798, 1800, 1801, 1803, 1804, 1808, 1809, 1811, 1812, 1814, 1816, 1819, 1822, 1823, 1825, 1826, 1828, 1829, 1833, 1836, 1837, 1838, 1839, 1840, 1845, 1846, 1847, 1854, 1859, 1864, 1865, 1866, 1868, 1869, 1870, 1873, 1874, 1876, 1882, 1883, 1884, 1887, 1889, 1893, 1897, 1898, 1899, 1900, 1905, 1908, 1909, 1913, 1916, 1919, 1922, 1924, 1926, 1928, 1932, 1933, 1935, 1937, 1938, 1940, 1943, 1946, 1947, 1948, 1950, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1962, 1963, 1964, 1966, 1968, 1972, 1974, 1975, 1976, 1978, 1980, 1982, 1984, 1986, 1987, 1988, 1989, 1991, 1993, 1994, 1995, 1997, 1999];

const array2 = [1, 4, 5, 6, 7, 8, 9, 14, 15, 16, 18, 19, 21, 22, 25, 27, 28, 29, 31, 32, 36, 47, 48, 50, 51, 52, 54, 56, 58, 61, 62, 63, 64, 65, 66, 67, 72, 74, 76, 77, 86, 88, 89, 93, 94, 96, 100, 102, 103, 104, 105, 106, 110, 112, 113, 114, 115, 118, 119, 122, 123, 125, 132, 134, 135, 136, 137, 143, 145, 149, 152, 153, 154, 155, 157, 158, 160, 162, 166, 168, 170, 173, 175, 176, 177, 178, 180, 184, 185, 186, 188, 191, 192, 193, 196, 197, 198, 201, 203, 204, 209, 212, 215, 217, 219, 227, 229, 230, 233, 238, 239, 240, 247, 248, 249, 250, 251, 252, 254, 256, 259, 260, 261, 266, 268, 270, 272, 276, 277, 280, 281, 285, 286, 287, 288, 289, 291, 292, 294, 295, 303, 304, 305, 307, 309, 310, 311, 314, 315, 317, 319, 320, 321, 322, 323, 325, 326, 328, 329, 331, 332, 333, 336, 337, 338, 342, 343, 345, 347, 348, 349, 350, 351, 352, 355, 357, 358, 360, 361, 365, 367, 369, 370, 371, 372, 374, 376, 377, 378, 379, 380, 381, 382, 383, 388, 390, 392, 394, 397, 398, 399, 401, 404, 405, 406, 407, 409, 410, 414, 416, 418, 419, 420, 421, 422, 424, 427, 430, 431, 433, 436, 437, 438, 443, 445, 446, 447, 449, 450, 451, 453, 454, 457, 460, 461, 462, 465, 466, 468, 469, 470, 471, 473, 475, 479, 480, 481, 483, 484, 487, 488, 490, 493, 497, 502, 503, 504, 509, 514, 516, 517, 518, 519, 520, 521, 522, 526, 529, 530, 532, 533, 535, 544, 546, 547, 553, 554, 555, 556, 559, 560, 561, 562, 565, 566, 567, 569, 570, 572, 573, 574, 575, 576, 578, 579, 581, 582, 583, 584, 586, 587, 588, 589, 590, 591, 592, 594, 595, 596, 598, 601, 603, 605, 606, 607, 608, 609, 611, 613, 615, 616, 617, 618, 620, 621, 624, 625, 626, 628, 633, 635, 636, 637, 640, 645, 650, 657, 658, 659, 660, 661, 665, 666, 667, 669, 674, 683, 684, 685, 686, 687, 692, 693, 694, 696, 697, 698, 699, 704, 709, 712, 718, 719, 720, 721, 722, 723, 725, 726, 728, 730, 732, 734, 742, 744, 745, 746, 748, 749, 750, 751, 752, 753, 756, 758, 760, 761, 762, 763, 769, 770, 772, 774, 775, 777, 778, 785, 787, 793, 794, 795, 796, 799, 800, 801, 803, 804, 805, 807, 809, 811, 812, 813, 815, 816, 817, 819, 820, 824, 825, 830, 831, 832, 834, 836, 837, 839, 840, 846, 849, 850, 852, 855, 858, 859, 863, 867, 868, 870, 872, 873, 877, 878, 882, 883, 884, 885, 886, 889, 893, 894, 895, 897, 898, 899, 902, 904, 906, 907, 908, 909, 911, 912, 913, 914, 915, 921, 922, 923, 924, 925, 926, 929, 932, 938, 939, 941, 942, 943, 949, 950, 951, 952, 953, 954, 957, 959, 960, 961, 966, 968, 970, 972, 973, 975, 976, 977, 978, 979, 981, 983, 986, 988, 991, 992, 994, 995, 996, 997, 998, 1000, 1001, 1006, 1007, 1013, 1014, 1015, 1016, 1017, 1018, 1020, 1022, 1023, 1024, 1026, 1027, 1030, 1032, 1034, 1035, 1036, 1039, 1043, 1044, 1046, 1048, 1054, 1055, 1059, 1063, 1064, 1065, 1069, 1071, 1072, 1074, 1075, 1076, 1077, 1078, 1080, 1084, 1090, 1091, 1094, 1096, 1097, 1098, 1100, 1101, 1103, 1104, 1111, 1112, 1114, 1116, 1117, 1118, 1120, 1121, 1123, 1124, 1127, 1129, 1135, 1137, 1138, 1140, 1142, 1144, 1145, 1147, 1149, 1151, 1152, 1153, 1154, 1158, 1159, 1161, 1162, 1163, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1177, 1179, 1184, 1185, 1186, 1187, 1192, 1193, 1194, 1195, 1197, 1199, 1200, 1204, 1205, 1208, 1209, 1211, 1212, 1214, 1217, 1218, 1223, 1224, 1226, 1228, 1231, 1235, 1236, 1239, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1254, 1255, 1256, 1257, 1260, 1266, 1269, 1271, 1274, 1275, 1277, 1280, 1281, 1284, 1285, 1289, 1290, 1292, 1293, 1295, 1296, 1298, 1301, 1303, 1308, 1312, 1313, 1318, 1328, 1330, 1335, 1336, 1337, 1338, 1342, 1347, 1348, 1350, 1352, 1353, 1354, 1355, 1356, 1358, 1359, 1361, 1363, 1366, 1369, 1373, 1374, 1377, 1379, 1384, 1385, 1386, 1387, 1388, 1389, 1391, 1394, 1397, 1398, 1402, 1404, 1406, 1408, 1411, 1412, 1414, 1415, 1418, 1419, 1421, 1422, 1423, 1425, 1427, 1429, 1433, 1434, 1435, 1436, 1437, 1439, 1440, 1442, 1443, 1444, 1446, 1448, 1451, 1454, 1456, 1457, 1459, 1461, 1462, 1463, 1464, 1465, 1466, 1468, 1469, 1470, 1472, 1473, 1474, 1477, 1479, 1480, 1483, 1484, 1486, 1489, 1490, 1492, 1493, 1494, 1496, 1497, 1498, 1503, 1504, 1505, 1513, 1515, 1518, 1523, 1524, 1525, 1526, 1527, 1529, 1530, 1531, 1534, 1538, 1540, 1543, 1546, 1551, 1553, 1557, 1558, 1559, 1560, 1562, 1563, 1568, 1570, 1573, 1574, 1575, 1576, 1577, 1579, 1582, 1583, 1590, 1591, 1593, 1594, 1595, 1596, 1597, 1599, 1601, 1602, 1603, 1604, 1606, 1609, 1610, 1611, 1612, 1613, 1617, 1623, 1624, 1627, 1628, 1629, 1631, 1632, 1634, 1635, 1636, 1637, 1638, 1639, 1641, 1644, 1647, 1651, 1653, 1654, 1655, 1658, 1659, 1661, 1662, 1663, 1668, 1670, 1671, 1673, 1674, 1677, 1682, 1684, 1686, 1691, 1693, 1694, 1696, 1697, 1699, 1700, 1703, 1704, 1707, 1715, 1717, 1718, 1720, 1723, 1724, 1726, 1728, 1730, 1731, 1733, 1736, 1736, 1738, 1739, 1743, 1750, 1752, 1753, 1754, 1757, 1759, 1760, 1763, 1766, 1764, 1767, 1768, 1769, 1774, 1775, 1777, 1781, 1782, 1785, 1786, 1789, 1790, 1791, 1792, 1793, 1795, 1797, 1799, 1801, 1802, 1806, 1809, 1811, 1812, 1813, 1816, 1817, 1819, 1821, 1822, 1824, 1825, 1827, 1829, 1830, 1831, 1832, 1833, 1834, 1837, 1839, 1842, 1845, 1846, 1847, 1848, 1850, 1851, 1853, 1854, 1856, 1857, 1858, 1864, 1865, 1866, 1871, 1874, 1877, 1879, 1881, 1882, 1886, 1893, 1894, 1895, 1898, 1899, 1900, 1901, 1905, 1907, 1911, 1915, 1916, 1922, 1923, 1926, 1927, 1932, 1939, 1940, 1941, 1942, 1946, 1947, 1950, 1953, 1954, 1955, 1959, 1961, 1963, 1964, 1966, 1967, 1969, 1970, 1972, 1974, 1975, 1976, 1978, 1980, 1981, 1982, 1985, 1987, 1989, 1991, 1993, 1996, 1997, 1999];





function recursiveIntersect(arr1, arr2, intersect = [], i=0, j=0){
    if(i >= arr1.length || j >= arr2.length){
        return intersect;
    }

    if(arr1[i] === arr2[j]){
        intersect.push(arr1[i])
        i++;
        j++;
    }
    else if(arr1[i] > arr2[j]) j++;
    else i++;

    return recursiveIntersect(arr1, arr2, intersect, i, j);
}







const iStart = performance.now();
const iUnioned = intersectSortedArray(array1, array2);
const iEnd = performance.now();

console.log(iUnioned);
console.log(`Branchless(?) took ${(iEnd - iStart)/10} seconds`);

const rStart = performance.now();
const rUnioned = recursiveIntersect(array1, array2);
const rEnd = performance.now();

console.log(`The recursive version took ${(rEnd - rStart )/ 10} seconds.`);
console.log(rUnioned);
