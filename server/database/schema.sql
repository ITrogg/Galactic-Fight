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

INSERT INTO planets (name, type, description, inhabitant, image) VALUES ('Tatooine', 'Desert', "Tatooine est une planète désertique située dans le Bordure Extérieure. Elle est connue pour ses deux soleils, Tatoo I et Tatoo II. C'est la planète natale d'Anakin et Luke Skywalker.", 200000, 'https://cdn-www.swtor.com/sites/all/files/en/planets/tatooine/planet_tatooine.png');
INSERT INTO planets (name, type, description, inhabitant, image) VALUES ('Coruscant', 'urban', 'Coruscant est une planète entièrement recouverte par une vaste métropole. Elle est le centre politique de la galaxie et le siège de la République Galactique.', 90000000, 'https://cdn-www.swtor.com/sites/all/files/en/planets/coruscant/planet_coruscant.png');
INSERT INTO planets (name, type, description, inhabitant, image) VALUES('Hoth', 'ice', 'Hoth est une planète glacée située dans le système Anoat. Elle est connue pour ses températures extrêmement basses et ses créatures indigènes telles que les Wampas.', 500, 'https://cdn-www.swtor.com/sites/all/files/en/planets/hoth/planet_hoth.png');
INSERT INTO planets (name, type, description, inhabitant, image) VALUES ('Naboo', 'Terrestrial', "Naboo est une planète luxuriante avec des paysages magnifiques et une culture riche. Elle est la planète natale de Padmé Amidala et de l'Empereur Palpatine.", 45000000, 'https://custom.swcombine.com/static/8/4/34-13715-1558966795-large.png');
INSERT INTO planets (name, type, description, inhabitant, image) VALUES ('Endor', 'Forest', "Endor, également connue sous le nom de lune forestière d'Endor, est une lune couverte de forêts abritant les Ewoks. Elle orbite la géante gazeuse Endor.", 30000000, 'https://www.pikpng.com/pngl/b/182-1828718_endor-star-wars-png-png-download-clipart.png');
INSERT INTO planets (name, type, description, inhabitant, image) VALUES ('Yavin iv', 'Jungle', 'Yavin 4 est une lune recouverte de jungle dans le système Yavin. Elle abrite la base rebelle lors de la bataille de Yavin.', 1000, 'https://www.jediholo.net/wp-content/uploads/2019/08/YavinIV_Planet_Preview.png');
INSERT INTO planets (name, type, description, inhabitant, image) VALUES ('Death Star', 'Space Station', "La Death Star est une station spatiale et une super arme capable de détruire des planètes entières. Construite par l'Empire Galactique, elle a joué un rôle central dans la Guerre Civile Galactique.", 342953, 'https://vignette.wikia.nocookie.net/starwars/images/2/2f/Deathstar_negwt.png/revision/latest?cb=20161002160419');

INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (35,60,100,'Luke Skywalker','https://github.com/Miadil/starwars-api/blob/master/api/assets/Luke_Skywalker.png?raw=true',6);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (10,20,100,'C-3PO','https://github.com/Miadil/starwars-api/blob/master/api/assets/C-3po.png?raw=true',1);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (15,20,100,'R2-D2','https://github.com/Miadil/starwars-api/blob/master/api/assets/R2D2.png?raw=true',1);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (40,60,100,'Darth Vader','https://github.com/Miadil/starwars-api/blob/master/api/assets/Dark_vador.png?raw=true',7);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (25,20,100,'Leia Organa','https://github.com/Miadil/starwars-api/blob/master/api/assets/Leia_Organa.png?raw=true',7);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (35,50,100,'Obi-Wan Kenobi','https://github.com/Miadil/starwars-api/blob/master/api/assets/Obi-wan_Kenobi.png?raw=true',6);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (45,40,100,'Anakin Skywalker','https://github.com/Miadil/starwars-api/blob/master/api/assets/Anakin_Skywalker.png?raw=true',5);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (15,25,100,'Wilhuff Tarkin','https://github.com/Miadil/starwars-api/blob/master/api/assets/Wilhuff_Tarkin.png?raw=true',1);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (25,30,100,'Chewbacca','https://github.com/Miadil/starwars-api/blob/master/api/assets/Chewbacca.png?raw=true',3);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (25,40,100,'Han Solo','https://github.com/Miadil/starwars-api/blob/master/api/assets/Han_Solo.png?raw=true',4);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (20,20,100,'Greedo','https://github.com/Miadil/starwars-api/blob/master/api/assets/Greedo.png?raw=true',2);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (15,60,120,'Jabba','https://github.com/Miadil/starwars-api/blob/master/api/assets/Jabba_Desilijic_Tiure.png?raw=true',5);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (50,40,130,'Yoda','https://github.com/Miadil/starwars-api/blob/master/api/assets/Yoda.png?raw=true',6);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (40,30,100,'Palpatine','https://github.com/Miadil/starwars-api/blob/master/api/assets/Palpatine.png?raw=true',4);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (30,30,100,'Boba Fett','https://github.com/Miadil/starwars-api/blob/master/api/assets/Boba_Fett.png?raw=true',3);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (40,25,100,'Qui-Gon Jinn','https://github.com/Miadil/starwars-api/blob/master/api/assets/Qui-Gon_Jinn.png?raw=true',3);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (15,30,100,'Nute Gunray','https://github.com/Miadil/starwars-api/blob/master/api/assets/Nute_Grunray.png?raw=true',2);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (20,30,100,'Finis Valorum','https://github.com/Miadil/starwars-api/blob/master/api/assets/Finis_Valorum.png?raw=true',2);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (35,45,100,'Padmé Amidala','https://github.com/Miadil/starwars-api/blob/master/api/assets/Padme_Amidala.png?raw=true',5);
INSERT INTO characters(atk,def,pv,name,image,planet_id) VALUES (45,30,100,'Darth Maul','https://github.com/Miadil/starwars-api/blob/master/api/assets/Dark_maul.png?raw=true',4);

