import React, { useState } from 'react';
import { Paper } from '../../../../components/Paper';
import { useStore } from '../../../../context/StoreContext';
import DownloadIcon from '../../../../assets/icons/download.svg?react';
import { SectionHeader } from '../../../../components/SectionHeader';
import { Button } from '../../../../components/Button';

import './style.css';

export const RightBlock: React.FC = () => {
  const { profile, updateProfile, saveProfile, resetProfile } = useStore();
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
  }>({});

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateProfile('profileImage', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors: { firstName?: string; lastName?: string; email?: string } =
      {};
    if (!profile.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!profile.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      saveProfile();
      alert('Profile saved!');
    }
  };

  const handleReset = () => {
    resetProfile();
  };

  return (
    <Paper className="rightBlock">
      <SectionHeader
        title="Profile Details"
        subtitle="Add your details to create a personal touch to your profile."
      />

      <Paper backgroundColor="#FAFAFA" style={{ padding: '1rem' }}>
        <div className="profilePictureWrapper">
          <p className="profilePictureTitle">Profile picture</p>
          <div className="imageUploadBlock">
            <div
              className="profilePicture"
              style={{
                backgroundImage: `url(${profile.profileImage || 'default-profile.jpg'})`,
              }}
            >
              <label className="imageUploadLabel">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                <div>
                  <DownloadIcon />
                  <span>Change Image</span>
                </div>
              </label>
            </div>
            <p className="imageInstructions">
              Image must be below 1024x1024px. Use PNG, JPG, or BMP format.
            </p>
          </div>
        </div>
      </Paper>

      <Paper backgroundColor="#FAFAFA" style={{ padding: '1rem' }}>
        <div className="profileInputGroup">
          <label>First name*</label>
          <input
            type="text"
            value={profile.firstName}
            onChange={(e) => updateProfile('firstName', e.target.value)}
            className={errors.firstName ? 'error' : ''}
            required
          />
          {errors.firstName && (
            <span className="error-message">{errors.firstName}</span>
          )}
        </div>

        <div className="profileInputGroup">
          <label>Last name*</label>
          <input
            type="text"
            value={profile.lastName}
            onChange={(e) => updateProfile('lastName', e.target.value)}
            className={errors.lastName ? 'error' : ''}
            required
          />
          {errors.lastName && (
            <span className="error-message">{errors.lastName}</span>
          )}
        </div>

        <div className="profileInputGroup">
          <label>Email</label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => updateProfile('email', e.target.value)}
            className={errors.email ? 'error' : ''}
            required
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>
      </Paper>

      <div className="button-group">
        <Button
          variant="outline"
          style={{ width: '100%', maxWidth: '5rem' }}
          onClick={handleReset}
        >
          Reset
        </Button>
        <Button
          style={{ width: '100%', maxWidth: '5rem' }}
          onClick={handleSave}
        >
          Save
        </Button>
      </div>
    </Paper>
  );
};
