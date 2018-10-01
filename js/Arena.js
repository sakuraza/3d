Arena = function(game) {
    // Appel des variables nécéssaires
    this.game = game;
    var scene = game.scene;

    // Création de notre lumière principale
    //var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    //Lumière hémisphérique
    /*var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 20, 0), scene); //Les paramètres sont : le nom de la lumière, la position à partir de laquelle la lumière éclairera, la scène actuelle.
    light.diffuse = new BABYLON.Color3(1, 1, 1);
    light.specular = new BABYLON.Color3(1, 1, 1);*/

    //Lumière directionnelle
    /*var light1 = new BABYLON.DirectionalLight("Dir1", new BABYLON.Vector3(0, -1, 0), scene);  //Les paramètres sont : le nom de la lumière, la direction de la lumière, la scène actuelle.
    light1.diffuse = new BABYLON.Color3(1, 1, 1);
    light1.specular = new BABYLON.Color3(1, 1, 1);*/

    //Lumière ponctuelle : ne peut pas diffuser d'ombres.
    var light1 = new BABYLON.PointLight("Omni1", new BABYLON.Vector3(1, 10, 1), scene); //Les paramètres sont : le nom de la lumière, la position de la lumière, la scène actuelle.
    light1.diffuse = new BABYLON.Color3(1, 1, 1);
    light1.specular = new BABYLON.Color3(1, 1, 1);

    //Spot
    var light1 = new BABYLON.SpotLight("Spot1", new BABYLON.Vector3(0, 30, -10), new BABYLON.Vector3(0, -1, 0), 0.8, 2, scene); //Les paramètres sont : le nom de la lumière, la position de la lumière, la direction de la lumière, l'angle d'ouverture du cône de lumière, l'exposant de diminution de la lumière avec la distance (plus ce nombre est élevé, plus la lumière diminue vite avec la distance), la scène actuelle.
    light1.diffuse = new BABYLON.Color3(1, 1, 1);
    light1.specular = new BABYLON.Color3(1, 1, 1);

    //Matériel pour le sol
    var materialGround = new BABYLON.StandardMaterial("groundTexture", scene);
    materialGround.diffuseTexture = new BABYLON.Texture("assets/images/brick.jpg", scene);
    //Une texture est un élément 2D. Pour changer sa taille, il faut utiliser  uscale et  vscale. La lettre  u  correspond à la hauteur de la texture alors que la lettre  v  correspond à la largeur.
    materialGround.diffuseTexture.uScale = 4.0;
    materialGround.diffuseTexture.vScale = 4.0;

    // Material pour les objets
    var materialWall = new BABYLON.StandardMaterial("groundTexture", scene);
    materialWall.diffuseTexture = new BABYLON.Texture("assets/images/wood.jpg", scene);

    // Créons une sphère 
    //var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);

    // Remontons le sur l'axe y de la moitié de sa hauteur
    //sphere.position.y = 1;

    // Ajoutons un sol pour situer la sphere dans l'espace
    var ground = BABYLON.Mesh.CreateGround("ground1", 20, 20, 2, scene);  //var ground = BABYLON.Mesh.CreateGround(name, width, depth, subdivision, scene);
    ground.scaling = new BABYLON.Vector3(2,10,3);   //scaling : qui va multiplier la taille d'un mesh
    ground.scaling.z = 2;   //Modifie un mesh sur un seul axe
    ground.material = materialGround;

    // Notre premier cube qui va servir de modèle
    //var mainBox = BABYLON.Mesh.CreateBox("box1", 3, scene);

    // Les trois clones
    /*var mainBox2 = mainBox.clone("box2");
    var mainBox3 = mainBox.clone("box3");
    var mainBox4 = mainBox.clone("box4");*/

    // Version simplifié
    /*var box = BABYLON.Mesh.CreateBox("square1", 5, scene);
    box.position.y=-3*/

    // Version complète
    //var box = BABYLON.Mesh.CreateBox(name, size, scene, updatable, orientation);

    // Version simplifiée
    //var cylinder = BABYLON.Mesh.CreateCylinder("cylindre1", 20, 5, 5, 20, 5, scene);

    // Version complète
    //var cylinder = BABYLON.Mesh.CreateCylinder(name, height, diamTop, diamBottom, tesselation, subdivision, scene, updatable, orientation);

    // SUR TOUS LES AXES Y -> On monte les meshes de la moitié de la hauteur du mesh en question.
    var mainBox = BABYLON.Mesh.CreateBox("box1", 3, scene);
    mainBox.scaling.y = 1;  //Cette ligne signifie que l'on va multiplier la taille de l'objet (scaling) sur l'axe Y de 1. 
    mainBox.position = new BABYLON.Vector3(5,((3/2)*mainBox.scaling.y),5);  //nous déplaçons l'objet d'un seul coup sur les 3 axes. Les axes X et Z déplacent l'objet autour du cylindre alors que Y s'occupe de "remonter" le mesh.
    mainBox.rotation.y = (Math.PI*45)/180;  //vu que les valeurs de rotation sont en radians, nous convertissons 45 degrés en radians avec cette formule mathématique.
    mainBox.material = materialWall;

    var mainBox2 = mainBox.clone("box2");
    mainBox2.scaling.y = 2;
    mainBox2.position = new BABYLON.Vector3(5,((3/2)*mainBox2.scaling.y),-5);

    var mainBox3 = mainBox.clone("box3");
    mainBox3.scaling.y = 3;
    mainBox3.position = new BABYLON.Vector3(-5,((3/2)*mainBox3.scaling.y),-5);

    var mainBox4 = mainBox.clone("box4");
    mainBox4.scaling.y = 4;
    mainBox4.position = new BABYLON.Vector3(-5,((3/2)*mainBox4.scaling.y),5);

    var cylinder = BABYLON.Mesh.CreateCylinder("cyl1", 20, 5, 5, 20, 4, scene);
    cylinder.position.y = 20/2;
    cylinder.material = materialWall;
};