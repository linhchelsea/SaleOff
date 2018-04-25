/**
 * @api {POST} http://localhost:3333/api/v1/feedback/send Send feedback
 * @apiName Send feedback
 * @apiGroup Feedback
 *
 * @apiParam {String} content Content
 *
 * @apiSuccess {Number} [error=0] error code
 * @apiSuccess {String} [message='success'] response message
 * @apiSuccess {Object[]} data data response
 * @apiSuccess {Number} [status=200] status response
 * @apiSuccessExample Success response:
 * {
 *   "status": 200,
 *   "data": null,
 *   "message": "success",
 *   "error": 0
 * }
 *
 * @apiError Validation Something is wrong
 * @apiErrorExample Error-Response:
 *{
 *   "status": 400,
 *   "data": null,
 *   "message": "content_is_required",
 *   "error": 400
 *}
 */
