INSERT INTO `jodel`.`customers`
(`custID`,
`address`,
`department`,
`name`)
VALUES
(1,
"Esslingen am Neckar, Flandernstraße 4",
"Sales",
"Design");

INSERT INTO `jodel`.`customers`
(`custID`,
`address`,
`department`,
`name`)
VALUES
(2,
"Stuttgart, Königsstraße 23",
"Logistik",
"Logistik Department");

INSERT INTO `jodel`.`contracts`
(`contID`,
`contractEndDate`,
`contractIp1`,
`contractIp2`,
`contractIp3`,
`contractLicenseKey`,
`contractNumFeature1`,
`contractNumFeature2`,
`contractNumFeature3`,
`contractStartDate`,
`contractVersion`)
VALUES
(1,
"2022-01-01",
"1.1.1.1",
null,
null,
"an8769wgn8gawng7896awdng6adan697ng30973gh02783rgh87nmag87mgad8n967amgmd63897g",
1,
2,
3,
"2022-12-31",
"1.1.0");

INSERT INTO `jodel`.`contracts`
(`contID`,
`contractEndDate`,
`contractIp1`,
`contractIp2`,
`contractIp3`,
`contractLicenseKey`,
`contractNumFeature1`,
`contractNumFeature2`,
`contractNumFeature3`,
`contractStartDate`,
`contractVersion`)
VALUES
(2,
"2022-04-01",
"1.1.1.1",
null,
null,
"guznawdnuadnaugzanduzgadng8aw76ngd9awn87dg69adng87awgd96n723dg9n634agh3807d73ga",
20,
40,
10,
"2022-05-05",
"1.3.2");

INSERT INTO `jodel`.`tuser`
(
`id`,
`username`,
`password`,
`userFirstName`,
`userLastName`,
`userMail`,
`userPhoneNumber1`,
`userPhoneNumber2`,
`isAdmin`)
VALUES
(
1,
"admin",
"admin",
"Admin",
"Istrator",
"admin@email.com",
"+49 2178 39827",
"54321",
1);

INSERT INTO `jodel`.`tuser`
(
`id`,
`username`,
`password`,
`userFirstName`,
`userLastName`,
`userMail`,
`userPhoneNumber1`,
`userPhoneNumber2`,
`isAdmin`)
VALUES
(
2,
'KlDiKl01',
'123',
'Klaus',
'Dieter-Klebsch',
'Klaus.DieterKlebsch@mail.com',
'+49150292389',
'+1 138 192 308',
1);