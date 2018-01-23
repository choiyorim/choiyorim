import { mysqlResource } from '../../../resource/mysql.resource';
const conn = mysqlResource.conn;

export class Lecture {
    constructor() {
    }

    /**
     * model: lecture 생성
     * @param lectureData
     * @returns {Promise<any>}
     */
    createLecture(lectureData: any): Promise<any> {
        return new Promise(async (resolve, reject) => {
            await conn.query(`INSERT INTO lectures SET ?`, [lectureData], function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(lectureData);
                }
            })
        })
    }

    /**
     * model: Lecture 리스트 조회
     * @returns {Promise<any>}
     */
    listLecture(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            await conn.query(`SELECT * FROM lectures`, function (err, rows) {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            })
        })
    }

    /**
     * model: Lecture lectureByName 조회
     * @param {number} lectureIndex
     * @returns {Promise<any>}
     */
    getLectureByName(lectureName: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            await conn.query(`SELECT * FROM lectures WHERE lectureName=?`, [lectureName], function (err, rows) {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            })
        })
    }
    /**
     * model: Lecture lectureByName 조회
     * @param {number} lectureIndex
     * @returns {Promise<any>}
     */
    getLectureByCode(lectureCode: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            await conn.query(`SELECT * FROM lectures WHERE lectureCode=?`, [lectureCode], function (err, rows) {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            })
        })
    }

    /**
     * model: Lecture lectureByTrack 조회
     * @param {number} lectureIndex
     * @returns {Promise<any>}
     */
    getLectureByTrack(lectureTrack: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            await conn.query(`SELECT * FROM lectures WHERE track=?`, [lectureTrack], function (err, rows) {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            })
        })
    }


    /**
     * model: lecture 업데이트
     * @param {number} lectureIndex
     * @param lectureData
     * @returns {Promise<any>}
     */
    updateLecture(lectureIndex:string, lectureData: any): Promise<any> {
        return new Promise(async(resolve, reject) => {
            await conn.query(`UPDATE lectures SET ? WHERE lectureIndex=?`, [lectureData,lectureIndex], function (err, rows) {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            })
        })
    }

    /**
     * model: lecture 삭제
     * @param {number} lectureIndex
     * * @returns {Promise<any>}
     */
    deleteLecture(lectureIndex:string): Promise<any> {
        return new Promise(async(resolve, reject) => {
            await conn.query(`DELETE FROM lectures WHERE lectureIndex=?`,lectureIndex,function(err, rows) {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            })
        })
    }
}

export const lecture: any = new Lecture();