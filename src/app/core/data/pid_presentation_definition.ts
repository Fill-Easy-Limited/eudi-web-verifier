import { Presentation } from '@app/features/siop-custom/models/Presentation';

/* eslint-disable quotes */
export const PID_PRESENTATION_DEFINITION: Presentation = {
	'type': 'vp_token',
	'presentation_definition': {
		'id': '32f54163-7166-48f1-93d8-ff217bdb0653',
		'input_descriptors': [
			{
				'id': 'eu.europa.ec.eudiw.pid.1',
				'name': 'EUDI PID',
				'purpose': 'We need to verify your identity',
				'format': {
					'mso_mdoc': {
						'alg': [
							"ES256",
							"ES384",
							"ES512",
							"EdDSA",
							"ESB256",
							"ESB320",
							"ESB384",
							"ESB512"
						]
					}
				},
				'constraints': {
					'fields': [
						{
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['family_name']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['given_name']"
							],
							'intent_to_retain': false
						},
						{
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['birth_date']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['age_over_18']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['age_in_years']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['age_birth_year']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['family_name_birth']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['given_name_birth']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['birth_place']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['birth_country']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['birth_state']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['birth_city']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['resident_address']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['resident_country']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['resident_state']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['resident_city']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['resident_postal_code']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['resident_street']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['resident_house_number']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['gender']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['nationality']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['issuance_date']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['expiry_date']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['issuing_authority']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['document_number']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['administrative_number']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['issuing_country']"
							],
							'intent_to_retain': false
						},
					  {
							'path': [
								"$['eu.europa.ec.eudiw.pid.1']['issuing_jurisdiction']"
							],
							'intent_to_retain': false
						}
					]
				}
			}
		]
	},
	'nonce' : ''
};
