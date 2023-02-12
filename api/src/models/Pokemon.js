const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type: DataTypes.UUID,  // genera un num random con letras y numeros q va a ser unico y no se repite
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,      // q este en false sig no te permito q este vacio
      primaryKey: true,

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, unique: true
    },
    life_points:{
      type: DataTypes.INTEGER,   //El tipo de datos INTEGER almacena números enteros
      allowNull: false
    },
    attack:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    defense:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    speed:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    height:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    img:{
      type:DataTypes.STRING,
      defaultValue:'https://i0.wp.com/www.alphr.com/wp-content/uploads/2016/07/whos_that_pokemon.png?resize=738%2C320&ssl=1'
      
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,    //por si quiero hacer un llamado a lo q esta solo en la base de datos
      allowNull: false,
      defaultValue: true,
    }
  });
};
