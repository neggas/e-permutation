(function () {
  var db = {
    loadData: function (filter) {
      return $.grep(this.clients, function (client) {
        return (
          (!filter.Matricule ||
            client.Matricule.indexOf(filter.Matricule) > -1) &&
          (filter.Age === undefined || client.Age === filter.Age) &&
          (!filter.Address || client.Address.indexOf(filter.Address) > -1) &&
          (!filter.Country || client.Country === filter.Country) &&
          (filter.Married === undefined || client.Married === filter.Married)
        );
      });
    },

    insertItem: function (insertingClient) {
      this.clients.push(insertingClient);
    },

    updateItem: function (updatingClient) {},

    deleteItem: function (deletingClient) {
      var clientIndex = $.inArray(deletingClient, this.clients);
      this.clients.splice(clientIndex, 1);
    },
  };

  window.db = db;

  db.countries = [
    { Name: "", Id: 0 },
    { Name: "United States", Id: 1 },
    { Name: "Canada", Id: 2 },
    { Name: "United Kingdom", Id: 3 },
    { Name: "France", Id: 4 },
    { Name: "Brazil", Id: 5 },
    { Name: "China", Id: 6 },
    { Name: "Russia", Id: 7 },
  ];

  db.clients = [
    {
      Matricule: "570257Z",
      Nom: "Konan",
      Prenoms: "Jean Basile",
      Sexe: "Masculin",
      Origine: "IEPP BIN-HOUYE",
      Destination: "IEPP ISSIA 2",
      Date: "10/09/2021",
      Contact: "0102045785",
      Statut: "En Attente",
    },
    {
      Matricule: "379184M",
      Nom: "Amadou",
      Prenoms: "Anzata Laurence",
      Sexe: "Féminin",
      Origine: "	IEPP N'DOUCI",
      Destination: "IEPP TANGUELAN",
      Date: "08/03/2021",
      Contact: "0405877889",
      Statut: "Validé IEP - Orig",
    },
    {
      Matricule: "980020A",
      Nom: "Djoman",
      Prenoms: "Angbo Jacques",
      Sexe: "Masculin",
      Origine: "IEPP COCODY ATTOBAN",
      Destination: "IEPP GALEBOUO",
      Date: "14/11/2021",
      Contact: "0889521445",
      Statut: "Validé DREN - Orig",
    },
    {
      Matricule: "906608F",
      Nom: "Ahossi",
      Prenoms: "Jean Luc",
      Sexe: "Masculin",
      Origine: "IEPP KORHOGO NORD",
      Destination: "IEPP KOUNAHIRI",
      Date: "31/06/2021",
      Contact: "0103445587",
      Statut: "Effectuée",
    },
    {
      Matricule: "117662G",
      Nom: "Bia",
      Prenoms: "Audrey Marcelle",
      Sexe: "Féminin",
      Origine: "IEPP YOPOUGON NIANGON",
      Destination: "IEPP ABOISSO",
      Date: "12/03/2021",
      Contact: "0545211078",
      Statut: "Rejetée",
    },
    {
      Matricule: "015855U",
      Nom: "Anhé",
      Prenoms: "Lucienne",
      Sexe: "Féminin",
      Origine: "IEPP ABOBO PLATEAU DOKOUI",
      Destination: "IEPP TRANSUA",
      Date: "27/10/2021",
      Contact: "0102458889",
      Statut: "Validé DREN - Dest",
    },
    {
      Matricule: "877102V",
      Nom: "Koné",
      Prenoms: "Aboudramane",
      Sexe: "Masculin",
      Origine: "IEPP BONDOUKOU 1",
      Destination: "IEPP AKOUPE",
      Date: "13/02/2021",
      Contact: "0405788552",
      Statut: "Rejetée",
    },
    {
      Matricule: "579018P",
      Nom: "Tra",
      Prenoms: "Lou Germaine",
      Sexe: "Féminin",
      Origine: "IEPP BONGOUANOU",
      Destination: "IEPP ZUENOULA",
      Date: "09/09/2021",
      Contact: "0405877889",
      Statut: "Validé IEP - Dest",
    },
    {
      Matricule: "006736Z",
      Nom: "Kouadio",
      Prenoms: "Adaye marcelin",
      Sexe: "Masculin",
      Origine: "IEPP BODOKRO",
      Destination: "IEPP KOLIA",
      Date: "22/04/2021",
      Contact: "0708895077",
      Statut: "Effectuée",
    },
    {
      Matricule: "994617M",
      Nom: "Gueu",
      Prenoms: "zranhoukpeu Roxanne",
      Sexe: "Féminin",
      Origine: "IEPP ABOBO PLATEAU DOKOUI",
      Destination: "IEPP TRANSUA",
      Date: "01/08/2021",
      Contact: "0306040452",
      Statut: "Validé IEP - Orig",
    },
    {
      Matricule: "290205Y",
      Nom: "Tapé",
      Prenoms: "Marc Jorès",
      Sexe: "Masculin",
      Origine: "IEPP BEDIALA",
      Destination: "IEPP GRAND-LAHOU",
      Date: "19/02/2021",
      Contact: "0575112565",
      Statut: "En Attente",
    },
    {
      Matricule: "817791P",
      Nom: "Gnahoua",
      Prenoms: "Gadou Debouchard",
      Sexe: "Masculin",
      Origine: "IEPP GBON",
      Destination: "IEPP N'DOUCI",
      Date: "28/09/2021",
      Contact: "0102030458",
      Statut: "Validé IEP - Dest",
    },
    {
      Matricule: "403604D",
      Nom: "Bleu",
      Prenoms: "Maho Julien",
      Sexe: "Masculin",
      Origine: "IEPP BETTIE",
      Destination: "IEPP BINGERVILLE",
      Date: "30/05/2021",
      Contact: "0778985426",
      Statut: "Validé IEP - Dest",
    },
    {
      Matricule: "699238S",
      Nom: "Zagadou",
      Prenoms: "Kaloua Dubosclar",
      Sexe: "Masculin",
      Origine: "IEPP HIRE",
      Destination: "IEPP KOUIBLY",
      Date: "04/01/2021",
      Contact: "0505063214",
      Statut: "Validé DREN - Orig",
    },
    {
      Matricule: "574868C",
      Nom: "Nianzou",
      Prenoms: "Jean Philippe",
      Sexe: "Masculin",
      Origine: "IEPP PRIKRO",
      Destination: "IEPP N'ZEKREZESSOU",
      Date: "18/06/2021",
      Contact: "0102345578",
      Statut: "En Attente",
    },
    {
      Matricule: "279202V",
      Nom: "Achi",
      Prenoms: "Achi Geraldine",
      Sexe: "Féminin",
      Origine: "IEPP BIETRY",
      Destination: "IEPP ZARANOU",
      Date: "22/08/2021",
      Contact: "2722215547",
      Statut: "Validé DREN - Dest",
    },
    {
      Matricule: "O668093J",
      Nom: "Kablan",
      Prenoms: "Regina Jeanette",
      Sexe: "Féminin",
      Origine: "IEPP YAKASSE FEYASSE",
      Destination: "IEPP TIASSALE 2",
      Date: "02/03/2021",
      Contact: "0708015444",
      Statut: "Effectuée",
    },
    {
      Matricule: "849910L",
      Nom: "Bini",
      Prenoms: "Kouadio Laurent",
      Sexe: "Masculin",
      Origine: "IEPP TAABO",
      Destination: "IEPP GBOGUHE",
      Date: "08/07/2021",
      Contact: "0505060402",
      Statut: "En Attente",
    },
  ];

  db.users = [
    {
      ID: "x",
      Account: "A758A693-0302-03D1-AE53-EEFE22855556",
      Name: "Carson Kelley",
      RegisterDate: "2002-04-20T22:55:52-07:00",
    },
    {
      Account: "D89FF524-1233-0CE7-C9E1-56EFF017A321",
      Name: "Prescott Griffin",
      RegisterDate: "2011-02-22T05:59:55-08:00",
    },
    {
      Account: "06FAAD9A-5114-08F6-D60C-961B2528B4F0",
      Name: "Amir Saunders",
      RegisterDate: "2014-08-13T09:17:49-07:00",
    },
    {
      Account: "EED7653D-7DD9-A722-64A8-36A55ECDBE77",
      Name: "Derek Thornton",
      RegisterDate: "2012-02-27T01:31:07-08:00",
    },
    {
      Account: "2A2E6D40-FEBD-C643-A751-9AB4CAF1E2F6",
      Name: "Fletcher Romero",
      RegisterDate: "2010-06-25T15:49:54-07:00",
    },
    {
      Account: "3978F8FA-DFF0-DA0E-0A5D-EB9D281A3286",
      Name: "Thaddeus Stein",
      RegisterDate: "2013-11-10T07:29:41-08:00",
    },
    {
      Account: "658DBF5A-176E-569A-9273-74FB5F69FA42",
      Name: "Nash Knapp",
      RegisterDate: "2005-06-24T09:11:19-07:00",
    },
    {
      Account: "76D2EE4B-7A73-1212-F6F2-957EF8C1F907",
      Name: "Quamar Vega",
      RegisterDate: "2011-04-13T20:06:29-07:00",
    },
    {
      Account: "00E46809-A595-CE82-C5B4-D1CAEB7E3E58",
      Name: "Philip Galloway",
      RegisterDate: "2008-08-21T18:59:38-07:00",
    },
    {
      Account: "C196781C-DDCC-AF83-DDC2-CA3E851A47A0",
      Name: "Mason French",
      RegisterDate: "2000-11-15T00:38:37-08:00",
    },
    {
      Account: "5911F201-818A-B393-5888-13157CE0D63F",
      Name: "Ross Cortez",
      RegisterDate: "2010-05-27T17:35:32-07:00",
    },
    {
      Account: "B8BB78F9-E1A1-A956-086F-E12B6FE168B6",
      Name: "Logan King",
      RegisterDate: "2003-07-08T16:58:06-07:00",
    },
    {
      Account: "06F636C3-9599-1A2D-5FD5-86B24ADDE626",
      Name: "Cedric Leblanc",
      RegisterDate: "2011-06-30T14:30:10-07:00",
    },
    {
      Account: "FE880CDD-F6E7-75CB-743C-64C6DE192412",
      Name: "Simon Sullivan",
      RegisterDate: "2013-06-11T16:35:07-07:00",
    },
    {
      Account: "BBEDD673-E2C1-4872-A5D3-C4EBD4BE0A12",
      Name: "Jamal West",
      RegisterDate: "2001-03-16T20:18:29-08:00",
    },
    {
      Account: "19BC22FA-C52E-0CC6-9552-10365C755FAC",
      Name: "Hector Morales",
      RegisterDate: "2012-11-01T01:56:34-07:00",
    },
    {
      Account: "A8292214-2C13-5989-3419-6B83DD637D6C",
      Name: "Herrod Hart",
      RegisterDate: "2008-03-13T19:21:04-07:00",
    },
    {
      Account: "0285564B-F447-0E7F-EAA1-7FB8F9C453C8",
      Name: "Clark Maxwell",
      RegisterDate: "2004-08-05T08:22:24-07:00",
    },
    {
      Account: "EA78F076-4F6E-4228-268C-1F51272498AE",
      Name: "Reuben Walter",
      RegisterDate: "2011-01-23T01:55:59-08:00",
    },
    {
      Account: "6A88C194-EA21-426F-4FE2-F2AE33F51793",
      Name: "Ira Ingram",
      RegisterDate: "2008-08-15T05:57:46-07:00",
    },
    {
      Account: "4275E873-439C-AD26-56B3-8715E336508E",
      Name: "Damian Morrow",
      RegisterDate: "2015-09-13T01:50:55-07:00",
    },
    {
      Account: "A0D733C4-9070-B8D6-4387-D44F0BA515BE",
      Name: "Macon Farrell",
      RegisterDate: "2011-03-14T05:41:40-07:00",
    },
    {
      Account: "B3683DE8-C2FA-7CA0-A8A6-8FA7E954F90A",
      Name: "Joel Galloway",
      RegisterDate: "2003-02-03T04:19:01-08:00",
    },
    {
      Account: "01D95A8E-91BC-2050-F5D0-4437AAFFD11F",
      Name: "Rigel Horton",
      RegisterDate: "2015-06-20T11:53:11-07:00",
    },
    {
      Account: "F0D12CC0-31AC-A82E-FD73-EEEFDBD21A36",
      Name: "Sylvester Gaines",
      RegisterDate: "2004-03-12T09:57:13-08:00",
    },
    {
      Account: "874FCC49-9A61-71BC-2F4E-2CE88348AD7B",
      Name: "Abbot Mckay",
      RegisterDate: "2008-12-26T20:42:57-08:00",
    },
    {
      Account: "B8DA1912-20A0-FB6E-0031-5F88FD63EF90",
      Name: "Solomon Green",
      RegisterDate: "2013-09-04T01:44:47-07:00",
    },
  ];
})();
