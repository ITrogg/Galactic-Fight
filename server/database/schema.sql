DROP TABLE IF EXISTS characters;
DROP TABLE IF EXISTS planets;
create table planets (
  id int primary key auto_increment not null,
  name varchar(255) not null,
  type varchar(255) not null ,
  description longtext,
  inhabitant int not null,
  image longtext not null
);

CREATE TABLE characters (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  atk INT NOT NULL,
  def INT NOT NULL,
  pv INT NULL,
  image VARCHAR(255),
  planet_id INT NOT NULL,
  FOREIGN KEY (planet_id) REFERENCES planets(id)
);

INSERT INTO planets (name, type, description, inhabitant, image) VALUES ('tatooine', 'desert', "tatooine est une planete desertique situee dans le bordure exterieure. elle est connue pour ses deux soleils, tatoo i et tatoo ii. c'est la planete natale d'anakin et luke skywalker.", 200000, 'https://cdn-www.swtor.com/sites/all/files/en/planets/tatooine/planet_tatooine.png');
INSERT INTO planets (name, type, description, inhabitant, image) VALUES ('coruscant', 'urban', 'coruscant est une planete entierement recouverte par une vaste metropole. elle est le centre politique de la galaxie et le siege de la republique galactique.', 90000000, 'https://cdn-www.swtor.com/sites/all/files/en/planets/coruscant/planet_coruscant.png');
INSERT INTO planets (name, type, description, inhabitant, image) VALUES('hoth', 'ice', 'hoth est une planete glacee situee dans le systeme anoat. elle est connue pour ses temperatures extremement basses et ses creatures indigenes telles que les wampas.', 500, 'https://cdn-www.swtor.com/sites/all/files/en/planets/hoth/planet_hoth.png');
INSERT INTO planets (name, type, description, inhabitant, image) VALUES ('naboo', 'terrestrial', "naboo est une planete luxuriante avec des paysages magnifiques et une culture riche. alle est la planate natale de padme amidala et de l'empereur palpatine.", 45000000, 'https://custom.swcombine.com/static/8/4/34-13715-1558966795-large.png');
INSERT INTO planets (name, type, description, inhabitant, image) VALUES ('endor', 'forest', "endor, egalement connue sous le nom de lune forestiere d'endor, est une lune couverte de forets abritant les ewoks. elle orbite la geante gazeuse endor.", 30000000, 'https://www.pikpng.com/pngl/b/182-1828718_endor-star-wars-png-png-download-clipart.png');
INSERT INTO planets (name, type, description, inhabitant, image) VALUES ('yavin iv', 'jungle', 'yavin iv est une lune recouverte de jungle dans le systeme yavin. elle abrite la base rebelle lors de la bataille de yavin.', 1000, 'https://www.jediholo.net/wp-content/uploads/2019/08/YavinIV_Planet_Preview.png');
INSERT INTO planets (name, type, description, inhabitant, image) VALUES ('death star', 'space station', "la death star est une station spatiale et une super arme capable de detruire des planetes entieres. construite par l'empire galactique, elle a joue un role central dans la guerre civile galactique.", 342953, 'https://vignette.wikia.nocookie.net/starwars/images/2/2f/Deathstar_negwt.png/revision/latest?cb=20161002160419');

INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (35,60,100,'luke skywalker','https://github.com/Miadil/starwars-api/blob/master/api/assets/Luke_Skywalker.png?raw=true',6);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (10,20,100,'see-threepio','https://github.com/Miadil/starwars-api/blob/master/api/assets/C-3po.png?raw=true',1);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (15,20,100,'artoo-detoo','https://github.com/Miadil/starwars-api/blob/master/api/assets/R2D2.png?raw=true',1);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (40,60,130,'darth vader','https://github.com/Miadil/starwars-api/blob/master/api/assets/Dark_vador.png?raw=true',7);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (25,20,100,'leia organa','https://github.com/Miadil/starwars-api/blob/master/api/assets/Leia_Organa.png?raw=true',7);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (35,50,100,'obi-wan kenobi','https://github.com/Miadil/starwars-api/blob/master/api/assets/Obi-wan_Kenobi.png?raw=true',6);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (45,40,100,'anakin skywalker','https://github.com/Miadil/starwars-api/blob/master/api/assets/Anakin_Skywalker.png?raw=true',5);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (15,25,100,'wilhuff tarkin','https://github.com/Miadil/starwars-api/blob/master/api/assets/Wilhuff_Tarkin.png?raw=true',1);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (25,30,100,'chewbacca','https://github.com/Miadil/starwars-api/blob/master/api/assets/Chewbacca.png?raw=true',3);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (25,40,100,'han solo','https://github.com/Miadil/starwars-api/blob/master/api/assets/Han_Solo.png?raw=true',4);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (20,20,100,'greedo','https://github.com/Miadil/starwars-api/blob/master/api/assets/Greedo.png?raw=true',2);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (15,60,120,'jabba','https://github.com/Miadil/starwars-api/blob/master/api/assets/Jabba_Desilijic_Tiure.png?raw=true',5);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (50,40,100,'yoda','https://github.com/Miadil/starwars-api/blob/master/api/assets/Yoda.png?raw=true',6);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (40,30,100,'palpatine','https://github.com/Miadil/starwars-api/blob/master/api/assets/Palpatine.png?raw=true',4);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (30,30,100,'boba fett','https://github.com/Miadil/starwars-api/blob/master/api/assets/Boba_Fett.png?raw=true',3);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (40,25,100,'qui-gon jinn','https://github.com/Miadil/starwars-api/blob/master/api/assets/Qui-Gon_Jinn.png?raw=true',3);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (15,30,100,'nute gunray','https://github.com/Miadil/starwars-api/blob/master/api/assets/Nute_Grunray.png?raw=true',2);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (20,30,100,'finis valorum','https://github.com/Miadil/starwars-api/blob/master/api/assets/Finis_Valorum.png?raw=true',2);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (35,45,100,'padme amidala','https://github.com/Miadil/starwars-api/blob/master/api/assets/Padme_Amidala.png?raw=true',5);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (45,30,100,'darth maul','https://github.com/Miadil/starwars-api/blob/master/api/assets/Dark_maul.png?raw=true',4);

