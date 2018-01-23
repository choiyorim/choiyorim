import { encriptionPw } from './encryption.resource';
import {lecture} from "../apis/lecture/model/lecture.model";

export class lectureResource{
    private lectureIndex;
    private lectureCode;
    private lectureName;
    private professorIndex;
    private track;
    private createdAt;
    private updateAt;

    constructor(lectureData){
        this.setLectureIndex(lectureData.lectureIndex);
        this.setLectureCode(lectureData.lectureCode);
        this.setLectureName(lectureData.lectureName);
        this.setProfessorIndex(lectureData.professorIndex);
        this.setTrack(lectureData.track);

    }

    public getLectureIndex(){
        return this.lectureIndex;
    }
    public setLectureIndex(lectureIndex){
        this.lectureIndex = lectureIndex;
    }
    public getLectureCode(){
        return this.lectureCode;
    }
    public setLectureCode(lectureCode){
        this.lectureCode = lectureCode;
    }
    public getLectureName(){
        return this.lectureName;
    }
    public setLectureName(lectureName){
        this.lectureName =lectureName;
    }
    public getProfessorIndex(){
        return this.professorIndex;
    }
    public setProfessorIndex(professorIndex){
        this.professorIndex = professorIndex;
    }
    public getTrack(){
        return this.track;
    }
    public setTrack(track){
        this.track = track;
    }

    getLectureData(){
        let lectureResource = {
            lectureIndex: this.getLectureIndex(),
            lectureCode: this.getLectureCode(),
            lectureName: this.getLectureName(),
            professorIndex: this.getProfessorIndex(),
            track: this.getTrack(),

        };
        return lectureResource;
    }
}