import { DataTypes, Model, Optional } from 'sequelize'
import { sqlConnection } from '../infra/setup-database';

export enum FileType {
    Book = 'book',
    Location = 'location',
}

interface BookAttributes {
    id: number;
    name: string;
    type: FileType;
    parent: number|null;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}


export interface BookInput extends Optional<BookAttributes, 'id'|'parent'> {}

export interface BookOutput extends Required<BookAttributes> {}
class Book extends Model<BookAttributes, BookInput>  implements BookAttributes {
    public id!: number
    public name!: string
    public type!: FileType
    public parent!: number|null;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Book.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    parent: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
    },
}, {
  sequelize: sqlConnection,
  paranoid: true
})

export default Book
