import { EntityRepository, Repository } from "typeorm";
import { SurveyUser } from "../models/Survey_User";

@EntityRepository(SurveyUser)
class SurveysUsersRepository extends Repository<SurveyUser> {

}

export { SurveysUsersRepository };