import { ID } from '../post';

/**
 * The object used to describe post list elements. Ie the home screen, ...
 */
export interface IPrevPost {
  /**
   * The id of the post
   */
  id: ID;

  /**
   * The thumbnail image
   */
  thumbnail: string;
}
