import { Request, Response, NextFunction } from 'express';
import { validate, ValidationError, ValidatorOptions } from 'class-validator';
import { plainToClass } from 'class-transformer';

export function validationMiddleware<T>(type: new () => T, skipMissingProperties = false) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const object = plainToClass(type, req.body);
    
    // Verify that the type passed is an object
    if (typeof object !== 'object') {
      return res.status(400).json({ message: 'Validation failed: Invalid object type' });
    }

    const errors: ValidationError[] = await validate(object, { skipMissingProperties });

    if (errors.length > 0) {
      return res.status(400).json({ message: 'Validation failed', errors });
    }

    next();
  };
}
