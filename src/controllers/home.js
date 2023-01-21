import {testEnvironmentVariable} from '../settings';

export const indexPage = (req, res) => res.status(200).json({message: testEnvironmentVariable});
export const aboutPage = (req,res) => res.status(200).json({message: "Working!"})
