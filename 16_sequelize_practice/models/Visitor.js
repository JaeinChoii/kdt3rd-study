const Visitor = function (Sequelize, DataTypes) {
  // Sequilize.define(param1, param2, param3)
  // param1: 모델(테이블) 이름 설정
  // param2: 컬럼 정의
  // param3: 모델 옵션 정의
  const model = Sequelize.define(
    'visitor', // param1: 모델(테이블) 이름 설정
    {
      id: {
        // id int not null primary key auto_increment
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        // name varchar(10) not null
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        // comment mediumtext
        type: DataTypes.TEXT('medium'),
      },
    }, // param2: 컬럼 정의
    {
      tableName: 'visitor',
      freezeTableName: true,
      timestamps: false,
    } // 인자3: 모델의 옵션 정의
  );

  return model;
};

module.exports = Visitor;
